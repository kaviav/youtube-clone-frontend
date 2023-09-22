import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./userSlice";
import videoReducer from "./videoSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const rootReducer = combineReducers({ user: userReducer, video: videoReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

//
//
//
//
// This code appears to be configuring and creating a Redux store using Redux Toolkit and Redux Persist. Let's break down what each step is doing:

// 1. **Import Statements**: The code imports various functions and libraries required for setting up and configuring the Redux store.

//    - `combineReducers`: This function is used to combine multiple reducers into a single root reducer.

//    - `configureStore`: This function is used to configure and create a Redux store. It's part of Redux Toolkit, which simplifies Redux store setup.

//    - `persistReducer`, `persistStore`: These functions are from `redux-persist` and are used for persisting the Redux store's state to storage (e.g., local storage).

//    - `storage`: This is an instance of storage (e.g., local storage) used by `redux-persist` to store the Redux state.

// 2. **Persist Configuration (`persistConfig`)**: This object defines the configuration for persisting the Redux store's state. It specifies:

//    - `key`: A unique key to identify the stored data in storage. In this case, it's set to `"root"`.

//    - `version`: An optional version number for the persisted data. If you ever need to change the shape of your Redux state, you can increment this version number to handle migrations.

//    - `storage`: The storage engine to use for persisting the state, which is the `storage` instance imported from `redux-persist/lib/storage`.

// 3. **Root Reducer (`rootReducer`)**: This code combines multiple reducers into a single root reducer. In this case, it's combining two reducers: `userReducer` and `cartReducer`. The resulting `rootReducer` will manage the entire state tree.

// 4. **Persisted Reducer (`persistedReducer`)**: Here, the `persistReducer` function is used to wrap the `rootReducer` with persistence logic based on the `persistConfig`. This means that the state managed by `rootReducer` will be automatically persisted to storage.

// 5. **Create Redux Store (`store`)**: The `configureStore` function is used to create the Redux store. It's configured with the following options:

//    - `reducer`: The `persistedReducer` is used as the root reducer. This means that all actions dispatched to the store will go through the combined reducers and the persistence logic.

//    - `middleware`: Middleware is configured using the `getDefaultMiddleware` function provided by Redux Toolkit. It also includes a `serializableCheck` option, which ignores certain Redux actions (e.g., `FLUSH`, `REHYDRATE`, etc.) when checking if an action is serializable. This is necessary because Redux Persist dispatches some non-serializable actions for state rehydration.

// 6. **Create Redux Persist Store (`persistor`)**: The `persistStore` function is used to create a `persistor` object. This `persistor` is responsible for managing the persistence of the Redux store's state. You can use it to control the persistence process, such as manually triggering rehydration of the state.

// In summary, this code sets up a Redux store with Redux Toolkit, combines multiple reducers into a root reducer, and configures Redux Persist to automatically persist the store's state to storage. The `persistor` is used for managing the persistence process, and the store is ready to be used within your application for managing state with the added benefit of data persistence. and persisted data can be viewed in redux dev tool persist section
