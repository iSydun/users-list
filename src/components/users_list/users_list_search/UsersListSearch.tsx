import React from "react";
import style from "./UsersListSearch.module.scss";
import { useTranslation } from "react-i18next";
import CustomInput from "../../custom_input/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { getUsersSearchRuleSelector } from "../../../reducers/users/selectors";
import { setUsersSearchRule } from "../../../reducers/users/actions";

const UsersListSearch = () => {
  const dispatch = useDispatch();
  const searchRule = useSelector(getUsersSearchRuleSelector);
  const { t } = useTranslation("Users");

  const onChange = (newSearchRule: string) => {
    dispatch(setUsersSearchRule({ searchRule: newSearchRule }));
  };

  return (
    <div className={style.container}>
      <CustomInput
        placeholder={t("usersListSearchPlaceholder")}
        value={searchRule}
        onChange={onChange}
      />
    </div>
  );
};

export default UsersListSearch;
