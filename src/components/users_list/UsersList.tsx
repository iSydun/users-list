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
import { useEffect } from "react";
import { getUsersRequest } from "../../reducers/users/actions";
import UsersListLoading from "./users_list_loading/UsersListLoading";
import UsersListEmptyPlaceholder from "./users_list_empty_placeholder/UsersListEmptyPlaceholder";
import UsersListError from "./users_list_error/UsersListError";

const UsersList = () => {
  const dispatch = useDispatch();
  const filteredUsers = useSelector(getFilteredUsersSelector);
  const isLoading = useSelector(getUsersLoadingSelector);
  const error = useSelector(getUsersErrorSelector);
  const { t } = useTranslation("Users");

  const isEmpty = filteredUsers.length === 0;
  const isError = error !== null;
  const isSearchVisible = !isLoading && !isError;

  const handleGetUsersRequest = () => {
    dispatch(getUsersRequest());
  };

  useEffect(() => {
    handleGetUsersRequest();
  }, []);

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
          filteredUsers.map((user, index) => (
            <UsersListItem
              key={index}
              id={user.id}
              name={user.name}
              username={user.username}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default UsersList;
