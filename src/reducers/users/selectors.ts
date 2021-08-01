import { createSelector } from "reselect";

import { AppState } from "../index";
import { filterUsers } from "./helpers";
import { GetUserFailureError, GetUsersFailure, IUser } from "./types";

const getUsersSearchRule = (state: AppState): string => state.users.searchRule;
const getUsers = (state: AppState): IUser[] => state.users.users;
const getUsersLoading = (state: AppState): boolean => state.users.loading;
const getUsersError = (state: AppState): GetUserFailureError | null =>
  state.users.error;

export const getUsersSearchRuleSelector = createSelector(
  getUsersSearchRule,
  (searchRule): string => searchRule
);
export const getFilteredUsersSelector = createSelector(
  getUsers,
  getUsersSearchRule,
  (users, searchRule): IUser[] => filterUsers(users, searchRule)
);
export const getIsFilteredUsersEmptySelector = createSelector(
  getFilteredUsersSelector,
  (filteredUsers): boolean => filteredUsers.length === 0
);
export const getIsUsersLoadingSelector = createSelector(
  getUsersLoading,
  (loading): boolean => Boolean(loading)
);
export const getUsersErrorSelector = createSelector(
  getUsersError,
  (error): GetUserFailureError | null => error
);
export const getIsUsersErrorSelector = createSelector(
  getUsersErrorSelector,
  (error): boolean => error === null
);
export const getIsUsersSearchVisibleSelector = createSelector(
  getIsUsersLoadingSelector,
  getIsUsersErrorSelector,
  (isLoading, isError): boolean => Boolean(!isLoading && !isError)
);
