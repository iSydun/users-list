import React from "react";
import { useTranslation } from "react-i18next";
import style from "./PageRefresh.module.scss";
import CustomButton from "../custom_button/CustomButton";

const handlePageRefresh = () => {
  window.location.reload();
};

const PageRefresh = () => {
  const { t } = useTranslation("Common");

  return (
    <div className={style.container}>
      <div className={style.title}>{t("somethingWentWrong")}</div>
      <div className={style.button}>
        <CustomButton title={t("pageRefresh")} onClick={handlePageRefresh} />
      </div>
    </div>
  );
};

export default PageRefresh;
