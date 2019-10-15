import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import App from "./layouts/App";
import "./assets/app.scss";

export const app = ({ page }) => {
  // Grab the state from a global variable injected into the server-generated HTML
  const preloadedState = window.PRELOADED_STATE;

  // Allow the passed state to be garbage-collected
  delete window.PRELOADED_STATE;

  // Create Redux store with initial state
  const store = configureStore(preloadedState);

  return hydrate(
    <Provider store={store}>
      <App page={page} />
    </Provider>,
    document.getElementById("react-body")
  );
};
