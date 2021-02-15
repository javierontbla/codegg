import { takeLatest, put } from "redux-saga/effects";

import { post_types } from "./types";
import { db } from "../../firebase/firebase";
import {
  request_all_comments_success_action,
  request_all_comments_failure_action,
  request_more_comments_success_action,
  request_more_comments_failure_action,
  send_new_comment_failure_action,
  send_new_comment_success_action,
  update_remaining_comments_action,
} from "./actions";

function* request_all_comments_async(action) {
  const comments_ref = db
    .collection(`posts/${action.payload}/comments`)
    .orderBy("votes", "desc")
    .limit(4);

  try {
    const comments_arr = [];
    const last_comment_firebase = yield comments_ref.get().then((snapshot) => {
      const last_element = snapshot.docs[snapshot.docs.length - 1];
      snapshot.forEach((doc) => comments_arr.push([doc.data(), doc.id]));

      return last_element;
    });

    yield put(
      request_all_comments_success_action({
        comments: comments_arr,
        last_comment: last_comment_firebase,
      })
    );
  } catch (error) {
    yield put(request_all_comments_failure_action(error));
  }
}

function* request_more_comments_async(action) {
  const { comments, last_comment, post_id } = action.payload;

  if (!last_comment) {
    // there are no comments yet
    yield put(update_remaining_comments_action());
    return;
  }

  const comments_ref = db
    .collection(`posts/${post_id}/comments`)
    .orderBy("votes", "desc")
    .startAfter(last_comment)
    .limit(4);

  try {
    const comments_arr = [...comments];
    const last_comment_firebase = yield comments_ref.get().then((snapshot) => {
      const last_element = snapshot.docs[snapshot.docs.length - 1];
      snapshot.forEach((doc) => comments_arr.push([doc.data(), doc.id]));

      return last_element;
    });

    if (!last_comment_firebase) {
      yield put(update_remaining_comments_action());
    } else {
      yield put(
        request_more_comments_success_action({
          comments: comments_arr,
          last_comment: last_comment_firebase,
        })
      );
    }
  } catch (error) {
    yield put(request_more_comments_failure_action(error));
  }
}

function* send_new_comment_async(action) {
  const {
    user,
    user_id,
    profile_image,
    comment,
    post_id,
    comments,
  } = action.payload;
  const all_comments_ref = db.collection(`posts/${post_id}/comments`);

  try {
    const new_comment_id = yield all_comments_ref
      .add({
        user,
        user_id,
        profile_image,
        comment,
        date: new Date(),
        votes: 0,
      })
      .then((doc_ref) => doc_ref.id);

    const new_comment_ref = db.doc(
      `posts/${post_id}/comments/${new_comment_id}`
    );

    const comments_arr = yield new_comment_ref.get().then((doc) => {
      if (doc.exists) return [[doc.data(), doc.id], ...comments];
      console.log("no doc"); // need to add saga error here
    });

    yield put(
      send_new_comment_success_action({
        comments: comments_arr,
      })
    );
  } catch (error) {
    yield put(send_new_comment_failure_action(error));
  }
}

export function* request_all_comments_saga() {
  yield takeLatest(
    post_types.REQUEST_ALL_COMMENTS_START,
    request_all_comments_async
  );
}

export function* request_more_comments_saga() {
  yield takeLatest(
    post_types.REQUEST_MORE_COMMENTS_START,
    request_more_comments_async
  );
}

export function* send_new_comment_saga() {
  yield takeLatest(post_types.SEND_NEW_COMMENT_START, send_new_comment_async);
}
