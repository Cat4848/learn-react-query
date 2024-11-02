"use client";

import { Provider } from "react-redux";
import { store } from "./app/redux/store/createStore";
import { ReactNode } from "react";

export default function ReactReduxProvider({
  children
}: {
  children: ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
