import { takeLatest, put } from "redux-saga/effects";

import { user_page_types } from "./types";
import {
  request_user_success_action,
  request_user_failure_action,
  request_user_recommended_success_action,
  request_user_recommended_failure_action,
  request_user_posts_success_action,
  request_user_posts_failure_action,
  request_user_reviews_success_action,
  request_user_reviews_failure_action,
  request_more_user_recommended_success_action,
  request_more_user_recommended_failure_action,
  request_more_user_posts_success_action,
  request_more_user_posts_failure_action,
  request_more_user_reviews_success_action,
  request_more_user_reviews_failure_action,
  validate_subscriber_success_action,
  validate_subscriber_failure_action,
  no_more_user_recommended,
  no_more_user_posts,
  no_more_user_reviews,
} from "./actions";
import { db } from "../../firebase/firebase";

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

// INITIAL REQUESTS //
function* request_user_async(action) {
  const { user_id } = action.payload;
  const investor_profile_ref = db.doc(`investors/${user_id}`);

  try {
    const response = yield investor_profile_ref.get().then((doc) => {
      if (doc.exists) return [doc.data(), doc.id];
      console.log("doc error");
    });

    yield put(request_user_success_action(response));
  } catch (error) {
    yield put(request_user_failure_action(error));
  }
}

function* request_user_posts_async(action) {
  const { user_id } = action.payload;
  const posts_ref = db
    .collection(`posts`)
    .orderBy("date", "desc")
    .where("user_id", "==", user_id)
    .limit(1);

  try {
    const user_posts = [];
    const last_user_post_firebase = yield posts_ref.get().then((snapshot) => {
      const last_element = snapshot.docs[snapshot.docs.length - 1];
      snapshot.forEach((doc) => user_posts.push([doc.data(), doc.id]));

      return last_element;
    });

    yield put(
      request_user_posts_success_action({
        last_user_post: last_user_post_firebase,
        user_posts,
      })
    );
  } catch (error) {
    yield put(request_user_posts_failure_action(error));
  }
}

function* request_user_recommended_async(action) {
  const { user_id } = action.payload;
  const user_recommended_ref = db
    .collection(`trades`)
    .orderBy("date", "desc")
    .where("user_id", "==", user_id)
    .limit(1);

  try {
    const user_recommended = [];
    const last_user_recommended_firebase = yield user_recommended_ref
      .get()
      .then((snapshot) => {
        const last_element = snapshot.docs[snapshot.docs.length - 1];
        snapshot.forEach((doc) => user_recommended.push([doc.data(), doc.id]));

        return last_element;
      });

    yield put(
      request_user_recommended_success_action({
        last_user_recommended: last_user_recommended_firebase,
        user_recommended,
      })
    );
  } catch (error) {
    yield put(request_user_recommended_failure_action(error));
  }
}

function* request_user_reviews_async(action) {
  const { user_id } = action.payload;
  const user_reviews_ref = db
    .collection(`articles`)
    .orderBy("date", "desc")
    .where("user_id", "==", user_id)
    .limit(1);

  try {
    const user_reviews = [];
    const last_user_review_firebase = yield user_reviews_ref
      .get()
      .then((snapshot) => {
        const last_element = snapshot.docs[snapshot.docs.length - 1];
        snapshot.forEach((doc) => {
          user_reviews.push([doc.data(), doc.id]);
        });

        return last_element;
      });

    yield put(
      request_user_reviews_success_action({
        last_user_review: last_user_review_firebase,
        user_reviews,
      })
    );
  } catch (error) {
    yield put(request_user_reviews_failure_action(error));
  }
}

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

// ADDITIONAL REQUESTS //
function* request_more_user_recommended_async(action) {
  const { last_user_recommended, user_recommended, user_id } = action.payload;
  const user_recommended_ref = db
    .collection(`trades`)
    .orderBy("date", "desc")
    .where("user_id", "==", user_id)
    .startAfter(last_user_recommended)
    .limit(1);

  try {
    const last_user_recommended_firebase = yield user_recommended_ref
      .get()
      .then((snapshot) => {
        const last_element = snapshot.docs[snapshot.docs.length - 1];
        snapshot.forEach((doc) => user_recommended.push([doc.data(), doc.id]));

        return last_element;
      });

    if (!last_user_recommended_firebase) {
      yield put(no_more_user_recommended());
    } else {
      yield put(
        request_more_user_recommended_success_action({
          last_user_recommended: last_user_recommended_firebase,
          user_recommended,
        })
      );
    }
  } catch (error) {
    yield put(request_more_user_recommended_failure_action(error));
  }
}

function* request_more_user_posts_async(action) {
  const { last_user_post, user_posts, user_id } = action.payload;
  const user_posts_ref = db
    .collection(`posts`)
    .orderBy("date", "desc")
    .where("user_id", "==", user_id)
    .startAfter(last_user_post)
    .limit(1);

  try {
    const last_user_post_firebase = yield user_posts_ref
      .get()
      .then((snapshot) => {
        const last_element = snapshot.docs[snapshot.docs.length - 1];
        snapshot.forEach((doc) => user_posts.push([doc.data(), doc.id]));

        return last_element;
      });

    if (!last_user_post_firebase) {
      yield put(no_more_user_posts());
    } else {
      yield put(
        request_more_user_posts_success_action({
          last_user_post: last_user_post_firebase,
          user_posts,
        })
      );
    }
  } catch (error) {
    yield put(request_more_user_posts_failure_action(error));
  }
}

function* request_more_user_reviews_async(action) {
  const { last_user_review, user_reviews, user_id } = action.payload;
  const user_reviews_ref = db
    .collection(`articles`)
    .orderBy("date", "desc")
    .where("user_id", "==", user_id)
    .startAfter(last_user_review)
    .limit(1);

  try {
    const last_user_review_firebase = yield user_reviews_ref
      .get()
      .then((snapshot) => {
        const last_element = snapshot.docs[snapshot.docs.length - 1];
        snapshot.forEach((doc) => user_reviews.push([doc.data(), doc.id]));

        return last_element;
      });

    if (!last_user_review_firebase) {
      yield put(no_more_user_reviews());
    } else {
      yield put(
        request_more_user_reviews_success_action({
          last_user_review: last_user_review_firebase,
          user_reviews,
        })
      );
    }
  } catch (error) {
    yield put(request_more_user_reviews_failure_action());
  }
}

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

// SUBSCRIBER REQUESTS //
function* validate_subscriber_async(action) {
  const { user_id, subscriber_id } = action.payload;
  const subscriber_ref = db.doc(
    `investors/${user_id}/subscribers/${subscriber_id}`
  );

  try {
    const response = yield subscriber_ref.get().then((doc) => {
      if (doc.exists) return true;
      else return false;
    });

    yield put(validate_subscriber_success_action(response));
  } catch (error) {
    yield put(validate_subscriber_failure_action(error));
  }
}

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

// SAGA FUNCTIONS //
export function* request_user_saga() {
  yield takeLatest(user_page_types.REQUEST_USER_START, request_user_async);
}

export function* request_user_recommended_saga() {
  yield takeLatest(
    user_page_types.REQUEST_USER_RECOMMENDED_START,
    request_user_recommended_async
  );
}

export function* request_user_posts_saga() {
  yield takeLatest(
    user_page_types.REQUEST_USER_POSTS_START,
    request_user_posts_async
  );
}

export function* request_user_reviews_saga() {
  yield takeLatest(
    user_page_types.REQUEST_USER_REVIEWS_START,
    request_user_reviews_async
  );
}

export function* request_more_user_posts_saga() {
  yield takeLatest(
    user_page_types.REQUEST_MORE_USER_POSTS_START,
    request_more_user_posts_async
  );
}

export function* request_more_user_recommended_saga() {
  yield takeLatest(
    user_page_types.REQUEST_MORE_USER_RECOMMENDED_START,
    request_more_user_recommended_async
  );
}

export function* request_more_user_reviews_saga() {
  yield takeLatest(
    user_page_types.REQUEST_MORE_USER_REVIEWS_START,
    request_more_user_reviews_async
  );
}

export function* validate_subscriber_saga() {
  yield takeLatest(
    user_page_types.VALIDATE_SUBSCRIBER_START,
    validate_subscriber_async
  );
}

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
