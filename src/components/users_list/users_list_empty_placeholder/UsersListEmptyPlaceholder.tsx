import React from "react";
import { useTranslation } from "react-i18next";
import style from "./UsersListEmptyPlaceholder.module.scss";

const UsersListEmptyPlaceholder = () => {
  const { t } = useTranslation("Users");
  return (
    <div className={style.container}>{t("usersListEmptyPlaceholder")}</div>
  );
};

export default UsersListEmptyPlaceholder;
