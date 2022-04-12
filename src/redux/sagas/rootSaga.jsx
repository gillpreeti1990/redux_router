import { takeLatest } from "redux-saga/effects";
import { handleSearchUsers, handleSearchUserId } from "./handler/users";
import { handleSearchPosts } from "./handler/posts";
import { SEARCH_USERS, USER_ID } from "../reducers/users";
import { GET_POSTS } from "../reducers/posts";

// generator function *
// watcher take help from TYPE to connect TASK and Handler
//first task check GET_IMAGES type in reducer is available if yes then call handleImageCollection in handler
//same as GET_IMAGE_DETAIL watcher check first type and go to handler
export function* watcherSaga() {
  yield takeLatest(SEARCH_USERS, handleSearchUsers);
  yield takeLatest(USER_ID, handleSearchUserId);
  yield takeLatest(GET_POSTS, handleSearchPosts);
}
