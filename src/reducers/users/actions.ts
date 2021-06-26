import {
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  SET_USERS_SEARCH_RULE,
} from "./actionTypes";
import {
  GetUsersFailure,
  GetUsersFailurePayload,
  GetUsersRequest,
  GetUsersSuccess,
  GetUsersSuccessPayload,
  SetUsersSearchRule,
  SetUsersSearchRulePayload,
} from "./types";

export const getUsersRequest = (): GetUsersRequest => ({
  type: GET_USERS_REQUEST,
});

export const getUsersSuccess = (
  payload: GetUsersSuccessPayload
): GetUsersSuccess => ({
  type: GET_USERS_SUCCESS,
  payload,
});

export const getUsersFailure = (
  payload: GetUsersFailurePayload
): GetUsersFailure => ({
  type: GET_USERS_FAILURE,
  payload,
});

export const setUsersSearchRule = (
  payload: SetUsersSearchRulePayload
): SetUsersSearchRule => ({
  type: SET_USERS_SEARCH_RULE,
  payload,
});
