import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import usersReducer from "./users";
import rootSaga from "../sagas";

const rootReducer = combineReducers({
  users: usersReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof rootReducer>;
export default store;
