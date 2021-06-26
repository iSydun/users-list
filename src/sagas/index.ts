import { all, fork } from "redux-saga/effects";
import usersSaga from "./users";

export default function* root() {
  yield all([fork(usersSaga)]);
}
