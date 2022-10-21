import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import logger from 'redux-logger'
import { configureStore } from "@reduxjs/toolkit";
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

import thunk from "redux-thunk";
import { userReducer } from "../reducer/userReducer";
import { instructorReducer } from "../reducer/instructorReducer";

// root reducer
const rootReducer = combineReducers({
  user: userReducer,
  instructor: instructorReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

// created reducer to be persisted at local storage
const persistedReducer = persistReducer(persistConfig, rootReducer);

//

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
