import { takeLatest, put } from "redux-saga/effects";

import { post_types } from "./types";
import { db } from "../../firebase";
import {
  request_all_comments_success_action,
  request_all_comments_failure_action,
  send_new_comment_failure_action,
  upvote_post_success_action,
  upvote_post_failure_action,
} from "./actions";

function* request_all_comments_async(action) {
  const all_comments_ref = db
    .collection(`posts/${action.payload}/comments`)
    .orderBy("date", "desc")
    .limit(3);

  try {
    const response = yield all_comments_ref.get().then((snapshot) => {
      const all_comments_arr = [];

      snapshot.forEach((comment) =>
        all_comments_arr.push([comment.data(), comment.id])
      );

      return all_comments_arr;
    });

    yield put(request_all_comments_success_action(response));
  } catch (error) {
    yield put(request_all_comments_failure_action(error));
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
        up_trends: 0,
        down_trends: 0,
      })
      .then((doc_ref) => doc_ref.id);

    const new_comment_ref = db.doc(
      `posts/${post_id}/comments/${new_comment_id}`
    );

    const response = yield new_comment_ref.get().then((doc) => {
      if (doc.exists) return [[doc.data(), doc.id], ...comments];
      console.log("no doc"); // need to add saga error here
    });

    yield put(request_all_comments_success_action(response));
  } catch (error) {
    yield put(send_new_comment_failure_action(error));
  }
}

function* upvote_post_async(action) {
  const { post_id, user_id } = action.payload;
  const post_ref = db.doc(`posts/${post_id}`);
  const upvotes_ref = db.doc(`posts/${post_id}/upvotes/${user_id}`);

  try {
    const response = yield upvotes_ref.get().then((doc) => {
      if (!doc.exists) {
        upvotes_ref.set({
          up_vote: true,
          down_vote: false,
        });
      }
    });

    //yield put(upvote_post_success_action());
  } catch (error) {
    yield console.log(error);
    yield put(upvote_post_failure_action(error));
  }
}

export function* request_all_comments_saga() {
  yield takeLatest(
    post_types.REQUEST_ALL_COMMENTS_START,
    request_all_comments_async
  );
}

export function* send_new_comment_saga() {
  yield takeLatest(post_types.SEND_NEW_COMMENT_START, send_new_comment_async);
}

export function* upvote_post_saga() {
  yield takeLatest(post_types.UPVOTE_POST_START, upvote_post_async);
}
