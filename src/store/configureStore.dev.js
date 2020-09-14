import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import DevTools from "../containers/DevTools";
import api from "./middleware/api";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";

const persistConfig = {
  key: "appStateRoot",
  storage,
  whitelist: ["auth", "entities"]
};

const persistedReducer  = persistReducer(persistConfig, rootReducer);

const configureStore = preloadedState => {
  const store = createStore(
    persistedReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, api, createLogger()),
      DevTools.instrument()
    )
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer);
    })
  }
  return [store, persistStore(store)];
};

export default configureStore;
