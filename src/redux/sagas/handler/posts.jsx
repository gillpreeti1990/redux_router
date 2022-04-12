import { call, put } from "redux-saga/effects";
import { storePosts } from "../../reducers/posts";

import { fetchPosts } from "../requests/posts";

//
export function* handleSearchPosts(action) {
  try {
    const response = yield call(fetchPosts, action.payload);
    const { data } = response;
    console.log(`response of posts`, response);
    console.log(`posts data`, data);
    yield put(storePosts(data));
    // console.log(`storePosts()`, storePosts());
  } catch (error) {
    console.log(error);
  }
}
