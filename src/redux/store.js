import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import advertReducer from './advert/advertsSlice';
import { filterReducer } from './filter/filterSlice';
import { favoritesReducer } from './favorites/favoritesSlice';

const favoritePersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};
const percistedReducer = persistReducer(
  favoritePersistConfig,
  favoritesReducer
);

export const store = configureStore({
  reducer: {
    adverts: advertReducer,
    filter: filterReducer,
    favorites: percistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
