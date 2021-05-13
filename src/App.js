import React from "react";
import { StoreProvider } from "easy-peasy";
import "./App.less";
import "I18n";

import store from "Store";

import Router from "./Router";

const App = () => (
  <StoreProvider store={store}>
    <Router />
  </StoreProvider>
);

export default App;
