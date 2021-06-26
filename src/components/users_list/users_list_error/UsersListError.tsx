import React from "react";
import { TFunction, useTranslation } from "react-i18next";
import style from "./UsersListError.module.scss";
import { GetUserFailureError } from "../../../reducers/users/types";

interface IProps {
  error: GetUserFailureError | null;
  refetch: () => void;
}

const getErrorMessage = (
  errorCode: GetUserFailureError | null,
  t: TFunction<string[]>
): string => {
  switch (errorCode) {
    case GetUserFailureError.SERVER_ERROR:
      return t(errorCode);

    default:
      return t(GetUserFailureError.UNKNOWN_ERROR);
  }
};

const UsersListError = ({ error, refetch }: IProps) => {
  const { t } = useTranslation(["Errors", "Common"]);

  return (
    <div className={style.container}>
      <span className={style.title}>{getErrorMessage(error, t)}</span>{" "}
      <span className={style.refetch} onClick={refetch}>
        {t("Common:refetch")}
      </span>
    </div>
  );
};

export default UsersListError;
