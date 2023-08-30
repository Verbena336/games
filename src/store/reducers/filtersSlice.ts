import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type FiltersSlice = {
  platform: string;
  category: string;
  sort: string;
  isLoading: boolean;
};

export const initialState: FiltersSlice = {
  platform: 'all',
  category: '',
  sort: '',
  isLoading: true,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setPlatform: (state, action: PayloadAction<string>) => {
      state.platform = action.payload;
      state.isLoading = true;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
      state.isLoading = true;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
      state.isLoading = true;
    },
  },
});

export const { setPlatform, setCategory, setIsLoading, setSort } = filtersSlice.actions;

export const platformValue = (state: RootState): string => state.filters.platform;
export const categoryValue = (state: RootState): string => state.filters.category;
export const isLoadingValue = (state: RootState): boolean => state.filters.isLoading;
export const sortValue = (state: RootState): string => state.filters.sort;

export default filtersSlice.reducer;
