import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import userIdDetailReducer from "./reducers/users";
import postsDetailReducer from "./reducers/posts";
import { watcherSaga } from "./sagas/rootSaga";

// only reducer code will change , we can add multiple reducers to it
const reducer = combineReducers({
  users: userIdDetailReducer,
  posts: postsDetailReducer,
});

// below code will be same for always
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
