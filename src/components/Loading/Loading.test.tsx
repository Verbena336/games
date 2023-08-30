import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store/store';
import { render, screen, waitFor } from '@testing-library/react';
import Loading from '.';

function Wrapper(props: { children: ReactNode }): JSX.Element {
  return (
    <BrowserRouter>
      <Provider store={store}>{props.children}</Provider>
    </BrowserRouter>
  );
}

describe('Loading', () => {
  it('should render', async () => {
    render(<Loading />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(screen.getByTestId('globalLoading')).toBeTruthy();
    });
  });
});
