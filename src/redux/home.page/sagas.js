import { takeLatest, put } from "redux-saga/effects";

import { homePageTypes } from "./types";
import { db } from "../../_firebase/firebase.config";
import {
  fetchUnfilteredArticlesSuccess,
  fetchUnfilteredArticlesFailure,
  fetchFilteredArticlesSuccess,
  fetchFilteredArticlesFailure,
  storeLastUnfilteredElement,
  storeLastFilteredElement,
  storeAvailableTagsSuccess,
  storeAvailableTagsFailure,
} from "./actions";

// async functions
function* fetchUnfilteredAsync() {
  const articlesRef = db.collection(`articulos_septiembre`);
  // inital fetch from firebase
  try {
    const res = yield articlesRef
      .orderBy("fecha_db")
      .limit(1)
      .get()
      .then((snapshot) => {
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
    yield put(fetchUnfilteredArticlesSuccess(res[0]));
    yield put(storeLastUnfilteredElement(res[1]));
  } catch (error) {
    yield put(fetchUnfilteredArticlesFailure(error));
  }
}

function* fetchFilteredAsync(action) {
  // geting the input from the button the user clicked
  const { previousArticles, input } = action.payload;
  const inputRef = db.collection(`articulos_septiembre`);

  try {
    const lastElement = yield inputRef
      .where("tags", "array-contains", `${input}`)
      .orderBy("fecha_db", "desc")
      .limit(1)
      .get()
      .then((snapshot) => {
        // we get the last doc from the collection, for future fetching
        // in case user wants to load more posts
        const lastRef = snapshot.docs[snapshot.docs.length - 1];
        snapshot.forEach(
          (article) => (previousArticles[article.id] = article.data())
        );
        return lastRef;
      });

    // firing succesful actions to store data on reducer
    yield put(storeLastFilteredElement(lastElement));
    yield put(fetchFilteredArticlesSuccess(previousArticles));
  } catch (error) {
    yield put(fetchFilteredArticlesFailure(error));
  }
}

function* fetchMoreUnfilteredAsync(action) {
  const { previousArticles, lastElement } = action.payload;
  const articlesRef = db
    .collection(`articulos_septiembre`)
    .orderBy("fecha_db")
    .startAfter(lastElement)
    .limit(1);

  try {
    const res = yield articlesRef.get().then((snapshot) => {
      // getting last element again for load more button
      const lastRef = snapshot.docs[snapshot.docs.length - 1];
      snapshot.forEach((doc) => previousArticles.push([doc.data(), doc.id]));
      return lastRef;
    });

    // firing succesful actions to store data on reducer
    yield put(fetchUnfilteredArticlesSuccess(previousArticles));
    yield put(storeLastUnfilteredElement(res));
  } catch (error) {
    yield put(fetchUnfilteredArticlesFailure(error));
  }
}

function* fetchMoreFilteredAsync(action) {
  // getting tag from redux reducer
  const { previousArticles, lastElement, tag } = action.payload;

  const filteredRef = db
    .collection(`articulos_septiembre`)
    .where("tags", "array-contains", `${tag}`)
    .orderBy("fecha_db", "desc")
    .startAfter(lastElement)
    .limit(1);

  try {
    const res = yield filteredRef.get().then((snapshot) => {
      // getting last element again for load more button
      const lastRef = snapshot.docs[snapshot.docs.length - 1];
      snapshot.forEach((doc) => (previousArticles[doc.id] = doc.data()));
      return lastRef;
    });

    yield put(storeLastFilteredElement(res));
    yield put(fetchFilteredArticlesSuccess(previousArticles));
  } catch (error) {
    yield put(fetchFilteredArticlesFailure(error));
  }
}

function* storeAvailableTagsAsync() {
  // get all available tags from firebase
  try {
    const tagsRef = db.doc(`available_tags/wAAVxYZYRYjqdLGXa1kn`);
    const res = yield tagsRef.get().then((doc) => {
      return doc.data().available_tags;
    });

    yield put(storeAvailableTagsSuccess(res));
  } catch (error) {
    yield put(storeAvailableTagsFailure(error));
  }
}

// sagas functions
export function* fetchUnfiltered() {
  yield takeLatest(
    homePageTypes.FETCH_UNFILTERED_ARTICLES_START,
    fetchUnfilteredAsync
  );
}

export function* fetchFiltered() {
  yield takeLatest(
    homePageTypes.FETCH_FILTERED_ARTICLES_START,
    fetchFilteredAsync
  );
}

export function* fetchMoreUnfiltered() {
  yield takeLatest(
    homePageTypes.FETCH_MORE_UNFILTERED_ARTICLES_START,
    fetchMoreUnfilteredAsync
  );
}

export function* fetchMoreFiltered() {
  yield takeLatest(
    homePageTypes.FETCH_MORE_FILTERED_ARTICLES_START,
    fetchMoreFilteredAsync
  );
}

export function* storeAvailableTags() {
  yield takeLatest(
    homePageTypes.STORE_AVAILABLE_TAGS_START,
    storeAvailableTagsAsync
  );
}
