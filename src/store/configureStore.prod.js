import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import api from "./middleware/api";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";

const persistConfig = {
  key: "appStateRoot",
  storage,
  whitelist: ["auth", "entities"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = preloadedState => {
  const store = createStore(
    persistedReducer,
    preloadedState,
    applyMiddleware(thunk, api)
  );
  return [store, persistStore(store)];
};

export default configureStore;
