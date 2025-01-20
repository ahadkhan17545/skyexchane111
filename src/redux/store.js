import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import matchesReducer from './slices/matchSlice';

// Create Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Combine reducers
const rootReducer = combineReducers({
  matches: matchesReducer,
});

// Persist config
const persistConfig = {
  key: 'root', // Key for storage
  storage,     // Type of storage (localStorage in this case)
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], // Ignore these actions for serializability
      },
    }).concat(sagaMiddleware), // Add Saga middleware
});

// Create the persistor
export const persistor = persistStore(store);

// Export the store
export default store;

// You can run your sagas later with `sagaMiddleware.run(rootSaga)`
