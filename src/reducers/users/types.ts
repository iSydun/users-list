import {
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  SET_USERS_SEARCH_RULE,
} from "./actionTypes";

export interface IUser {
  id: number;
  name: string;
  username: string;
}

export type GetUsersRequest = {
  type: typeof GET_USERS_REQUEST;
};

export type GetUsersSuccessPayload = {
  users: IUser[];
};
export type GetUsersSuccess = {
  type: typeof GET_USERS_SUCCESS;
  payload: GetUsersSuccessPayload;
};

export type GetUsersFailurePayload = {
  error: GetUserFailureError;
};
export type GetUsersFailure = {
  type: typeof GET_USERS_FAILURE;
  payload: GetUsersFailurePayload;
};

export enum GetUserFailureError {
  UNKNOWN_ERROR = "unknownError",
  SERVER_ERROR = "serverError",
}

export type SetUsersSearchRulePayload = {
  searchRule: string;
};
export type SetUsersSearchRule = {
  type: typeof SET_USERS_SEARCH_RULE;
  payload: SetUsersSearchRulePayload;
};

export interface UsersState {
  users: IUser[];
  loading: boolean;
  searchRule: string;
  error: GetUserFailureError | null;
}
export type UsersActions =
  | GetUsersRequest
  | GetUsersSuccess
  | GetUsersFailure
  | SetUsersSearchRule;
