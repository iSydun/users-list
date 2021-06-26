import {
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  SET_USERS_SEARCH_RULE,
} from "./actionTypes";
import { UsersActions, UsersState } from "./types";

const initialState: UsersState = {
  users: [],
  loading: false,
  searchRule: "",
  error: null,
};

const usersReducer = (state = initialState, action: UsersActions) => {
  switch (action.type) {
    case GET_USERS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
        searchRule: "",
      };
    }
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload.users,
        loading: false,
        error: null,
      };
    }
    case GET_USERS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    case SET_USERS_SEARCH_RULE: {
      return {
        ...state,
        searchRule: action.payload.searchRule,
      };
    }

    default:
      return state;
  }
};

export default usersReducer;
