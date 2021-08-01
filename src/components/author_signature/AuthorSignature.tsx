import React from "react";
import style from "./AuthorSignature.module.scss";
import i18n from "i18next";

const AUTHOR_SIGNATURE =
  process.env.REACT_APP_AUTHOR || i18n.t("Common:noAuthorSignaturePlaceholder");

const AuthorSignature = () => {
  return <div className={style.container}>{AUTHOR_SIGNATURE}</div>;
};

export default AuthorSignature;
