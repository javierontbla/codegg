import { takeLatest, put } from "redux-saga/effects";

import { articles_page_types } from "./types";
import { db } from "../../firebase";
import {
  request_available_categories_success_action,
  request_available_categories_failure_action,
  request_unfiltered_articles_success_action,
  request_unfiltered_articles_failure_action,
  request_filtered_articles_success_action,
  request_filtered_articles_failure_action,
  store_last_unfiltered_article_action,
  store_last_filtered_article_action,
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
function* request_unfiltered_articles_async() {
  const articlesRef = db
    .collection(`articles`)
    .orderBy("date", "desc")
    .limit(3);
  // inital fetch from firebase
  try {
    const res = yield articlesRef.get().then((snapshot) => {
      // we get the last doc from the collection, for future fetching
      // in case user wants to load more posts
      const lastRef = snapshot.docs[snapshot.docs.length - 1];
      const articles = [];
      snapshot.forEach((article) =>
        articles.push([article.data(), article.id])
      );
      return [articles, lastRef];
    });

    // firing succesful actions to store data on reducer
    yield put(request_unfiltered_articles_success_action(res[0]));
    yield put(store_last_unfiltered_article_action(res[1]));
  } catch (error) {
    yield put(request_unfiltered_articles_failure_action(error));
  }
}

function* request_filtered_articles_async(action) {
  // geting the input from the button the user clicked
  const { previous_filtered_articles, category } = action.payload;
  const filtered_articles_ref = db
    .collection("articles")
    .where("categories", "array-contains", `${category}`)
    .orderBy("date", "desc");

  try {
    const last_filtered_article = yield filtered_articles_ref
      .get()
      .then((snapshot) => {
        // we get the last doc from the collection, for future fetching
        // in case user wants to load more posts
        const last_filtered_article_ref =
          snapshot.docs[snapshot.docs.length - 1];

        snapshot.forEach((doc) =>
          previous_filtered_articles.push([doc.data(), doc.id])
        );
        return last_filtered_article_ref;
      });
    // firing succesful actions to store data on reducer
    yield put(store_last_filtered_article_action(last_filtered_article));
    yield put(
      request_filtered_articles_success_action(previous_filtered_articles)
    );
  } catch (error) {
    yield put(request_filtered_articles_failure_action(error));
  }
}

function* request_more_unfiltered_articles_async(action) {
  const { previousArticles, lastElement } = action.payload;
  const articlesRef = db
    .collection(`articulos`)
    .orderBy("fecha", "desc")
    .startAfter(lastElement)
    .limit(3);

  try {
    const res = yield articlesRef.get({ source: "server" }).then((snapshot) => {
      // getting last element again for load more button
      const lastRef = snapshot.docs[snapshot.docs.length - 1];
      snapshot.forEach((doc) => previousArticles.push([doc.data(), doc.id]));
      return lastRef;
    });

    // firing succesful actions to store data on reducer
    yield put(request_unfiltered_articles_success_action(previousArticles));
    // storing last element from collection for next fetch
    yield put(store_last_unfiltered_article_action(res));
  } catch (error) {
    yield put(request_unfiltered_articles_failure_action(error));
  }
}

function* request_more_filtered_articles_async(action) {
  // getting tag from redux reducer
  const { previousArticles, lastElement, tag } = action.payload;

  const filteredRef = db
    .collection(`articulos`)
    .where("categorias", "array-contains", `${tag}`)
    .orderBy("fecha", "desc")
    .startAfter(lastElement)
    .limit(1);

  try {
    const res = yield filteredRef.get({ source: "server" }).then((snapshot) => {
      // getting last element again for load more button
      const lastRef = snapshot.docs[snapshot.docs.length - 1];
      snapshot.forEach((doc) => previousArticles.push([doc.data(), doc.id]));
      return lastRef;
    });

    yield put(request_filtered_articles_success_action(previousArticles));
    // storing last element from collection for next fetch
    yield put(store_last_filtered_article_action(res));
  } catch (error) {
    yield put(request_filtered_articles_failure_action(error));
  }
}

function* request_available_categories_async() {
  // get all available tags from firebase
  const categories_ref = db.doc(`categories/oUrt0M5eEN8f7FosGxqW`);

  try {
    const response = yield categories_ref.get().then((doc) => {
      return doc.data().categories;
    });

    yield put(request_available_categories_success_action(response));
  } catch (error) {
    yield put(request_available_categories_failure_action(error));
  }
}

function* upload_draft_async(action) {
  const { user_id, draft } = action.payload;
  const user_drafts_ref = db.collection(`investors/${user_id}/drafts`);

  try {
    const response = yield user_drafts_ref.add({
      ...draft,
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
export function* request_unfiltered_articles_saga() {
  yield takeLatest(
    articles_page_types.REQUEST_UNFILTERED_ARTICLES_START,
    request_unfiltered_articles_async
  );
}

export function* request_filtered_articles_saga() {
  yield takeLatest(
    articles_page_types.REQUEST_FILTERED_ARTICLES_START,
    request_filtered_articles_async
  );
}

export function* request_more_unfiltered_articles_saga() {
  yield takeLatest(
    articles_page_types.REQUEST_MORE_UNFILTERED_ARTICLES_START,
    request_more_unfiltered_articles_async
  );
}

export function* request_more_filtered_articles_saga() {
  yield takeLatest(
    articles_page_types.REQUEST_MORE_FILTERED_ARTICLES_START,
    request_more_filtered_articles_async
  );
}

export function* request_available_categories_saga() {
  yield takeLatest(
    articles_page_types.REQUEST_CATEGORIES_START,
    request_available_categories_async
  );
}

/* DRAFTS ACTIONS */
export function* request_drafts_saga() {
  yield takeLatest(
    articles_page_types.REQUEST_DRAFTS_START,
    request_drafts_async
  );
}

export function* request_draft_saga() {
  yield takeLatest(
    articles_page_types.REQUEST_DRAFT_START,
    request_draft_async
  );
}

export function* upload_draft_saga() {
  yield takeLatest(articles_page_types.UPLOAD_DRAFT_START, upload_draft_async);
}

export function* upload_article_saga() {
  yield takeLatest(
    articles_page_types.UPLOAD_ARTICLE_START,
    upload_article_async
  );
}

export function* create_draft_saga() {
  yield takeLatest(articles_page_types.CREATE_DRAFT_START, create_draft_async);
}
