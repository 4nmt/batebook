import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  );
}
