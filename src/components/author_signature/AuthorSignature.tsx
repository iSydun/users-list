import React from "react";
import packageJson from "../../../package.json";
import style from "./AuthorSignature.module.scss";

const AuthorSignature = () => {
  return <div className={style.container}>{packageJson.author}</div>;
};

export default AuthorSignature;
