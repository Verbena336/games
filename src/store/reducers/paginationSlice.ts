import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type PageSlice = {
  page: number;
  pageSize: number;
};

const initialState: PageSlice = {
  page: 1,
  pageSize: 10,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
  },
});

export const { setPage, setPageSize } = pageSlice.actions;

export const pageValue = (state: RootState): number => state.page.page;
export const pageSizeValue = (state: RootState): number => state.page.pageSize;

export default pageSlice.reducer;
