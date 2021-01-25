import { takeLatest, put } from "redux-saga/effects";

import { drafts_page_types } from "./types";
import { db } from "../../firebase/firebase";
import {
  upload_draft_success_action,
  upload_draft_failure_action,
  create_draft_success_action,
  create_draft_failure_action,
  request_drafts_success_action,
  request_drafts_failure_action,
  request_draft_success_action,
  request_draft_failure_action,
} from "./actions";

// async functions
function* create_draft_async(action) {
  const {
    user_id,
    user,
    profile_image,
    title,
    description,
    content,
    genres,
  } = action.payload;
  const drafts_ref = db.collection(`investors/${user_id}/drafts`);

  try {
    const response = yield drafts_ref
      .add({
        user,
        profile_image,
        title,
        description,
        content,
        genres,
      })
      .then((doc_ref) => doc_ref.id);

    yield put(create_draft_success_action(response));
  } catch (error) {
    yield put(create_draft_failure_action(error));
  }
}

function* save_draft_async(action) {
  const { user_id, draft_id, draft } = action.payload;
  const user_drafts_ref = db.doc(`investors/${user_id}/drafts/${draft_id}`);

  try {
    const response = yield user_drafts_ref.update({
      ...draft,
    });

    yield put(upload_draft_success_action(response));
  } catch (error) {
    yield put(upload_draft_failure_action(error));
  }
}

function* save_article_async(action) {
  const { user, user_id, title, description, content, genres } = action.payload;
  const articles_ref = db.collection(`articles`);

  const reduced_content = yield content.reduce((accum, current) => {
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
    const response = yield articles_ref.add({
      article_image:
        "https://images.unsplash.com/photo-1610620746532-17022962989c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      categories: genres,
      date: new Date(),
      description: "this is a description",
      profile_image:
        "https://images.unsplash.com/photo-1588731247530-4076fc99173e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      title,
      title_link,
      user,
      user_id,
      description,
      content: reduced_content,
      up_trends: 0,
      down_trends: 0,
    });
  } catch (error) {}
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

export function* save_article_saga() {
  yield takeLatest(drafts_page_types.UPLOAD_ARTICLE_START, save_article_async);
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
