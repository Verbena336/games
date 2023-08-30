import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './reducers/filtersSlice';
import pageReducer from './reducers/paginationSlice';
import { commonApi } from './services/commonApi';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    page: pageReducer,
    [commonApi.reducerPath]: commonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(commonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
