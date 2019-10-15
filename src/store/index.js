import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

export function configureStore(preloadedState = {}) {
  const middlewares = composeWithDevTools(applyMiddleware(thunk));

  return createStore(reducers, preloadedState, middlewares);
}
