import { all, call, put, takeLatest } from "redux-saga/effects";
import * as usersTypes from "../../reducers/users/actionTypes";
import usersApi from "../../api/users";
import { GetUserFailureError, IUser } from "../../reducers/users/types";
import { getUsersFailure, getUsersSuccess } from "../../reducers/users/actions";
import { parseUsers } from "./helpers";

export function* getUsersSaga() {
  try {
    const response: Promise<any> = yield call(usersApi.getUsers);

    if (!Array.isArray(response)) {
      throw Error();
    }

    const users: IUser[] = parseUsers(response);
    yield put(getUsersSuccess({ users }));
  } catch (e) {
    yield put(getUsersFailure({ error: GetUserFailureError.SERVER_ERROR }));
  }
}

function* usersSaga() {
  yield all([takeLatest(usersTypes.GET_USERS_REQUEST, getUsersSaga)]);
}

export default usersSaga;
