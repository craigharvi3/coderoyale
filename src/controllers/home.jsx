/* eslint-disable no-underscore-dangle */
import config from "config";
import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store";
import App from "../layouts/App";
import serverRender from "../utils/serverRender";

const home = async (req, res, next) => {
  try {
    const initialState = {};

    const store = configureStore(initialState);
    const reactBody = await serverRender(
      <Provider store={store}>
        <App page="home" />
      </Provider>
    );
    const preloadedState = JSON.stringify(store.getState()).replace(
      /</g,
      "\\u003c"
    );
    const preloadedProps = JSON.stringify({
      page: "home"
    });

    const meta = {
      title: "Code Royale",
      description:
        "All the best bits from your favourite podcasts. Save snippets to listen to later, subscribe to your favourite podcasts and get fresh recommendations every day.",
      siteName: "Code Royale",
      type: "website",
      url: `https://${req.get("host")}${req.originalUrl}`
    };

    res.status(200).render("home", {
      layout: false,
      isProduction: config.get("environment") === "production",
      preloadedState,
      preloadedProps,
      meta,
      reactBody
    });
  } catch (err) {
    console.log(err);
    return next(new Error("500"));
  }
};

export default home;
