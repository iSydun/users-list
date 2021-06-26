import { createSelector } from "reselect";

import { AppState } from "../index";
import { filterUsers } from "./helpers";

const getUsersSearchRule = (state: AppState) => state.users.searchRule;
const getUsers = (state: AppState) => state.users.users;
const getUsersLoading = (state: AppState) => state.users.loading;
const getUsersError = (state: AppState) => state.users.error;

export const getUsersSearchRuleSelector = createSelector(
  getUsersSearchRule,
  (searchRule) => searchRule
);
export const getFilteredUsersSelector = createSelector(
  getUsers,
  getUsersSearchRule,
  (users, searchRule) => filterUsers(users, searchRule)
);
export const getUsersLoadingSelector = createSelector(
  getUsersLoading,
  (loading) => loading
);
export const getUsersErrorSelector = createSelector(
  getUsersError,
  (error) => error
);
