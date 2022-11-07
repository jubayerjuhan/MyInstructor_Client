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
import { cartReducer } from "../reducer/cartReducer";
import { bookingReducer, creditReducer } from "../reducer/bookingReducer";
import { activeBooking } from "../reducer/active_bookingReducer";
import { adminReducer } from "../reducer/admin_reducer";
import { adminDataReducer } from "../reducer/admin_dataReducer";

// root reducer
const rootReducer = combineReducers({
  user: userReducer,
  instructor: instructorReducer,
  cart: cartReducer,
  credit: creditReducer,
  booking: bookingReducer,
  activeBooking: activeBooking,
  admin: adminReducer,
  adminData: adminDataReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["adminData"],
};

// created reducer to be persisted at local storage
const persistedReducer = persistReducer(persistConfig, rootReducer);

//

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
