import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunkMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
