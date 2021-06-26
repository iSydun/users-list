import React from "react";
import { useTranslation } from "react-i18next";
import style from "./UsersListLoading.module.scss";

const UsersListLoading = () => {
  const { t } = useTranslation("Common");
  return <div className={style.container}>{t("loading")}</div>;
};

export default UsersListLoading;
