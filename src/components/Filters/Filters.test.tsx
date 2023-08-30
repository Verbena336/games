import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import Filters from '.';
import filtersReducer, { FiltersSlice } from '../../store/reducers/filtersSlice';
import { EnhancedStore, configureStore } from '@reduxjs/toolkit';
import userEvent from '@testing-library/user-event';

describe('Filters', () => {
  let store: EnhancedStore<{ filters: FiltersSlice }>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        filters: filtersReducer,
      },
    });
  });
  function Wrapper(props: { children: ReactNode }): JSX.Element {
    return (
      <BrowserRouter>
        <Provider store={store}>{props.children}</Provider>
      </BrowserRouter>
    );
  }
  it('should renders', async () => {
    render(<Filters />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(screen.getByTestId('filters')).toBeTruthy();
    });
  });

  it('change store when change platform select', async () => {
    const { container } = render(<Filters />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(screen.getByTestId('platform')).toBeTruthy();
    });

    await act(async () => {
      const select = container.querySelector('.ant-select-selection-search-input');
      fireEvent.mouseDown(select!);
    });

    const option = await waitFor(() => screen.getByText('Windows (PC)'));

    act(() => {
      userEvent.click(option);
    });

    const filtersState = store.getState().filters;
    await waitFor(() => {
      expect(filtersState).toEqual({
        platform: 'pc',
        category: '',
        sort: '',
        isLoading: true,
      });
    });
  });

  it('change store when change genre select', async () => {
    const { container } = render(<Filters />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(screen.getByTestId('genre')).toBeTruthy();
    });

    await act(async () => {
      const select = container.querySelectorAll('.ant-select-selection-search-input')[1];
      fireEvent.mouseDown(select!);
    });

    const option = await waitFor(() => screen.getByText('2D'));

    act(() => {
      userEvent.click(option);
    });

    const filtersState = store.getState().filters;
    await waitFor(() => {
      expect(filtersState).toEqual({
        platform: 'all',
        category: '2d',
        sort: '',
        isLoading: true,
      });
    });
  });
});
