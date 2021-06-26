import React, { ReactNode } from "react";
import style from "./AppLayout.module.scss";

interface IProps {
  children: ReactNode;
}

const AppLayout = ({ children }: IProps) => {
  return <div className={style.container}>{children}</div>;
};

export default AppLayout;
