import { takeLatest, put } from "redux-saga/effects";

import { profile_page_types } from "./types";
import { db, storage } from "../../firebase/firebase";
import {
  request_profile_success_action,
  request_profile_failure_action,
  update_profile_success_action,
  update_profile_failure_action,
  update_profile_image_success_action,
  update_profile_image_failure_action,
} from "./actions";

function* request_profile_async(action) {
  const { user_id } = action.payload;
  const profile_ref = db.doc(`investors/${user_id}`);

  try {
    const response = yield profile_ref.get().then((doc) => {
      return [doc.data(), doc.id];
    });

    yield put(request_profile_success_action(response));
  } catch (error) {
    yield put(request_profile_failure_action(error));
  }
}

function* update_profile_async(action) {
  const { user_id, user, description } = action.payload;
  const profile_ref = db.doc(`investors/${user_id}`);

  try {
    yield profile_ref.update({
      user,
      description,
    });

    const updated_profile_ref = yield profile_ref
      .get()
      .then((doc) => [doc.data(), doc.id]);

    yield put(update_profile_success_action(updated_profile_ref));
  } catch (error) {
    yield put(update_profile_failure_action(error));
  }
}

function* update_profile_image_async(action) {
  const { field, image, user_id } = action.payload;
  const profile_ref = db.doc(`investors/${user_id}`);
  let image_url = null;

  try {
    if (field === "profile_image") {
      const storage_ref = storage.ref(
        `users/${user_id}/profile/profile_image_${user_id}`
      );
      image_url = yield storage_ref.put(image).then(() => {
        const url = storage
          .ref(`users/${user_id}/profile`)
          .child(`profile_image_${user_id}`)
          .getDownloadURL();
        return url;
      });

      yield profile_ref.update({
        profile_image: image_url,
      });

      yield put(
        update_profile_image_success_action({
          profile_image: image_url,
        })
      );
    } else {
      const storage_ref = storage.ref(
        `users/${user_id}/profile/cover_image_${user_id}`
      );
      image_url = yield storage_ref.put(image).then(() => {
        const url = storage
          .ref(`users/${user_id}/profile`)
          .child(`cover_image_${user_id}`)
          .getDownloadURL();
        return url;
      });

      yield profile_ref.update({
        cover_image: image_url,
      });

      yield put(
        update_profile_image_success_action({
          cover_image: image_url,
        })
      );
    }
  } catch (error) {
    yield put(update_profile_image_failure_action(error));
  }
}

export function* request_profile_saga() {
  yield takeLatest(
    profile_page_types.REQUEST_PROFILE_START,
    request_profile_async
  );
}

export function* update_profile_saga() {
  yield takeLatest(
    profile_page_types.UPDATE_PROFILE_START,
    update_profile_async
  );
}

export function* update_profile_image_saga() {
  yield takeLatest(
    profile_page_types.UPDATE_PROFILE_IMAGE_START,
    update_profile_image_async
  );
}
