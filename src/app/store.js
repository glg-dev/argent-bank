import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import loginReducer from '../feature/loginSlice'

const reducers = combineReducers({
  login: loginReducer
});

// export default configureStore({
//   reducer: {
//     login: loginReducer,
//   }
// })

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export default store;