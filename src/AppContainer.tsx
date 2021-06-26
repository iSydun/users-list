import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const AppContainer = ({ children }: IProps) => {
  return <div className="app-container">{children}</div>;
};

export default AppContainer;
