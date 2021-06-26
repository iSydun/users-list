import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import style from "./SomethingWentWrong.module.scss";
import CustomButton from "../custom_button/CustomButton";

const SomethingWentWrong = () => {
  const { t } = useTranslation("Common");
  const history = useHistory();

  const goToUsersList = () => {
    history.push("/users");
  };

  return (
    <div className={style.container}>
      <div className={style.title}>{t("pageNotFoundTitle")}</div>
      <div className={style.button}>
        <CustomButton title={t("goBack")} onClick={goToUsersList} />
      </div>
    </div>
  );
};

export default SomethingWentWrong;
