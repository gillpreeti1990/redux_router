import { call, put } from "redux-saga/effects";
import { storeUsers, storeUserId } from "../../reducers/users";
import { fetchSearchUsers, fetchSearchUserId } from "../requests/users";

export function* handleSearchUsers(action) {
  try {
    const response = yield call(fetchSearchUsers, action.payload);
    const { data } = response;
    console.log(`response of USERS`, response);
    yield put(storeUsers(data));
    console.log("storeUsers())", storeUsers());
  } catch (error) {
    console.log(error);
    console.log(`hello`);
  }
}

export function* handleSearchUserId(action) {
  try {
    const response = yield call(fetchSearchUserId, action.payload);
    const { data } = response;
    // const { data }= response?.data;

    console.log(`response of USER ID`, response);
    console.log(`user id data`, data);
    yield put(storeUserId(data));
  } catch (error) {
    console.log(error);
  }
}
