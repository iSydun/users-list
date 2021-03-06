import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import store from "../reducers";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

const AllTheProviders: FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
