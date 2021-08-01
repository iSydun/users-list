import style from "./UsersList.module.scss";
import { useTranslation } from "react-i18next";
import UsersListSearch from "./users_list_search/UsersListSearch";
import UsersListItem from "./users_list_item/UsersListItem";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsersLoadingSelector,
  getFilteredUsersSelector,
  getUsersErrorSelector,
} from "../../reducers/users/selectors";
import { useEffect, useState } from "react";
import { getUsersRequest } from "../../reducers/users/actions";
import UsersListLoading from "./users_list_loading/UsersListLoading";
import UsersListEmptyPlaceholder from "./users_list_empty_placeholder/UsersListEmptyPlaceholder";
import UsersListError from "./users_list_error/UsersListError";

const UsersList = () => {
  const dispatch = useDispatch();
  const filteredUsers = useSelector(getFilteredUsersSelector);
  const isLoading = useSelector(getUsersLoadingSelector);
  const error = useSelector(getUsersErrorSelector);
  const [crashTheAppRequest, setCrashTheAppRequest] = useState(false);

  const { t } = useTranslation(["Users", "Common"]);

  const isEmpty = filteredUsers.length === 0;
  const isError = error !== null;
  const isSearchVisible = !isLoading && !isError;

  const handleGetUsersRequest = () => {
    dispatch(getUsersRequest());
  };

  const handleCrashTheApp = () => {
    setCrashTheAppRequest(true);
  };

  useEffect(() => {
    handleGetUsersRequest();
  }, []);

  // Added for testing purposes
  if (crashTheAppRequest) {
    throw new Error();
  }

  return (
    <div className={style.container}>
      <div className={style.title}>{t("usersListTitle")}</div>
      {isSearchVisible && (
        <>
          <div className={style.search}>
            <UsersListSearch />
          </div>
          <div className={style.refresh} onClick={handleGetUsersRequest}>
            {t("usersListRefresh")}
          </div>
        </>
      )}
      <div className={style.innerContainer}>
        {isLoading ? (
          <UsersListLoading />
        ) : isError ? (
          <UsersListError error={error} refetch={handleGetUsersRequest} />
        ) : isEmpty ? (
          <UsersListEmptyPlaceholder />
        ) : (
          filteredUsers.map((user) => (
            <UsersListItem
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
            />
          ))
        )}
      </div>
      <div className={style.crash} onClick={handleCrashTheApp}>
        {t("Common:crashTheApp")}
      </div>
    </div>
  );
};

export default UsersList;
