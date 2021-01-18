import { takeLatest, put } from "redux-saga/effects";

import { write_page_types } from "./types";
import {
  upload_draft_success_action,
  upload_draft_failure_action,
  create_draft_success_action,
  create_draft_failure_action,
} from "./actions";
import { db } from "../../firebase";

function* upload_draft_async(action) {
  const { title, draft, user_id } = action.payload;
  const drafts_ref = db.collection(`investors/${user_id}/drafts`);

  try {
    const response = yield drafts_ref.add({
      ...draft,
      title,
    });

    yield put(upload_draft_success_action(response));
  } catch (error) {
    yield put(upload_draft_failure_action(error));
  }
}

function* upload_article_async(action) {
  const { title, article } = action.payload;
  const articles_ref = db.collection(`articles`);

  const content = yield article.reduce((accum, current) => {
    const { html_type, content } = current;
    return accum + `<${html_type}>${content}</${html_type}>`;
  }, "");

  try {
    const response = articles_ref.add({
      article_image:
        "https://images.unsplash.com/photo-1610620746532-17022962989c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      categories: ["stocks"],
      content,
      date: new Date(),
      description: "this is a description",
      profile_image:
        "https://images.unsplash.com/photo-1588731247530-4076fc99173e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      title,
      title_link: "brand new company at highest",
      user: "Marshall Mathers",
    });
  } catch (error) {}
}

function* create_draft_async(action) {
  const drafts_ref = db.collection(`investors/${action.payload}/drafts`);

  try {
    const response = yield drafts_ref
      .add({
        content: "",
      })
      .then((doc_ref) => doc_ref.id);

    yield put(create_draft_success_action(response));
  } catch (error) {
    yield put(create_draft_failure_action(error));
  }
}

export function* upload_draft_saga() {
  yield takeLatest(write_page_types.UPLOAD_DRAFT_START, upload_draft_async);
}

export function* upload_article_saga() {
  yield takeLatest(write_page_types.UPLOAD_ARTICLE_START, upload_article_async);
}

export function* create_draft_saga() {
  yield takeLatest(write_page_types.CREATE_DRAFT_START, create_draft_async);
}
