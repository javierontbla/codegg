import { takeLatest, put } from "redux-saga/effects";
import firebase from "firebase/app";

import { drafts_page_types } from "./types";
import { db } from "../../firebase/firebase";
import {
  upload_draft_success_action,
  upload_draft_failure_action,
  create_draft_success_action,
  create_draft_failure_action,
  upload_article_success_action,
  upload_article_failure_action,
  request_drafts_success_action,
  request_drafts_failure_action,
  request_draft_success_action,
  request_draft_failure_action,
} from "./actions";

// async functions
function* create_draft_async(action) {
  const {
    user_id,
    title,
    description,
    content,
    tags,
    draft_image,
    score,
  } = action.payload;
  const drafts_ref = db.collection(`investors/${user_id}/drafts`);

  try {
    const response = yield drafts_ref
      .add({
        title,
        description,
        content,
        tags,
        draft_image,
        score,
      })
      .then((doc_ref) => doc_ref.id);

    yield put(create_draft_success_action(response));
  } catch (error) {
    yield put(create_draft_failure_action(error));
  }
}

// save draft on firebase
function* save_draft_async(action) {
  const {
    user_id,
    draft_id,
    title,
    description,
    tags,
    content,
    draft_image,
    score,
  } = action.payload;
  const user_drafts_ref = db.doc(`investors/${user_id}/drafts/${draft_id}`);

  try {
    const response = yield user_drafts_ref.update({
      title,
      description,
      tags,
      content,
      draft_image,
      score: parseFloat(score).toFixed(1),
    });

    yield put(upload_draft_success_action(response));
  } catch (error) {
    yield put(upload_draft_failure_action(error));
  }
}

// upload article to firebase
function* upload_article_async(action) {
  const {
    user,
    user_id,
    title,
    description,
    content,
    tags,
    profile_image,
    draft_image,
    score,
    categories,
  } = action.payload;
  const articles_ref = db.collection(`articles`);
  const tags_ref = db.doc(`categories/oUrt0M5eEN8f7FosGxqW`);

  const tags_to_string = yield tags.map((tag) => {
    return tag.replace(/[^a-zA-Z0-9]/g, "");
  });

  const tags_filtered = yield tags_to_string.filter((tag) => {
    return tag !== null;
  });

  const content_reduced = yield content.reduce((accum, current) => {
    const { html_type, text } = current;

    if (html_type === "img") {
      return accum + `<${html_type} src=${text} />`;
    } else {
      return accum + `<${html_type}>${text}</${html_type}>`;
    }
  }, "");

  const title_link = title
    .toLowerCase()
    .replace(/[^A-Za-z0-9\s]/g, "")
    .trim()
    .replace(/ /g, "-");

  try {
    const response = yield articles_ref
      .add({
        article_image: draft_image,
        profile_image,
        title,
        title_link,
        user,
        user_id,
        date: new Date(),
        description,
        categories: tags_filtered,
        content: content_reduced,
        score: parseFloat(score).toFixed(1),
        votes: 0,
      })
      .then((doc) => doc.id);

    yield tags_ref.update({
      categories: [...categories, ...tags_filtered],
    });

    yield put(upload_article_success_action(response));
  } catch (error) {
    console.log(error);
    yield put(upload_article_failure_action(error));
  }
}

function* delete_draft_async(action) {
  const { user_id, draft_id } = action.payload;
  const draft_ref = db.doc(`investors/${user_id}/drafts/${draft_id}`);

  try {
    yield draft_ref.delete();
  } catch (error) {
    console.log(error);
  }
}

function* request_draft_async(action) {
  const { user_id, draft_id } = action.payload;
  const draft_ref = db.doc(`investors/${user_id}/drafts/${draft_id}`);

  try {
    const response = yield draft_ref.get().then((doc) => {
      if (doc.exists) return [doc.data(), doc.id];
    });

    yield put(request_draft_success_action(response));
  } catch (error) {
    yield put(request_draft_failure_action(error));
  }
}

function* request_drafts_async(action) {
  const { user_id } = action.payload;
  const drafts_ref = db.collection(`investors/${user_id}/drafts`);

  try {
    const response = yield drafts_ref.get().then((snapshot) => {
      const drafts_arr = [];
      snapshot.forEach((doc) => drafts_arr.push([doc.data(), doc.id]));
      return drafts_arr;
    });

    yield put(request_drafts_success_action(response));
  } catch (error) {
    yield put(request_drafts_failure_action(error));
  }
}

/* SAGAS FUNCTIONS */
export function* create_draft_saga() {
  yield takeLatest(drafts_page_types.CREATE_DRAFT_START, create_draft_async);
}

export function* save_draft_saga() {
  yield takeLatest(drafts_page_types.UPLOAD_DRAFT_START, save_draft_async);
}

export function* upload_article_saga() {
  yield takeLatest(
    drafts_page_types.UPLOAD_ARTICLE_START,
    upload_article_async
  );
}

export function* delete_draft_saga() {
  yield takeLatest(drafts_page_types.DELETE_DRAFT_START, delete_draft_async);
}

export function* request_drafts_saga() {
  yield takeLatest(
    drafts_page_types.REQUEST_DRAFTS_START,
    request_drafts_async
  );
}

export function* request_draft_saga() {
  yield takeLatest(drafts_page_types.REQUEST_DRAFT_START, request_draft_async);
}
