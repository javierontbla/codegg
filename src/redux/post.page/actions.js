import { postPageTypes } from "./types";

export const fetchPostStart = (id) => ({
  type: postPageTypes.FETCH_POST_START,
  payload: id,
});

export const fetchPostSuccess = (post) => ({
  type: postPageTypes.FETCH_POST_SUCCESS,
  payload: post,
});

export const fetchPostFailure = (error) => ({
  type: postPageTypes.FETCH_POST_FAILURE,
  payload: error,
});
