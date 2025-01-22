import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage";

import matchesReducer from "./slices/matchSlice";
import marketOddsReducer from "./slices/fullmarketSlice";

const runningDataTransform = createTransform(
  (inboundState) => ({ runningData: inboundState.runningData }),
  (outboundState) => ({ ...outboundState }),
  { whitelist: ["marketOdds"] }
);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["marketOdds"],
  transforms: [runningDataTransform],
};

const rootReducer = combineReducers({
  matches: matchesReducer,
  marketOdds: marketOddsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});


export const persistor = persistStore(store);

export default store;
