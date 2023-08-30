import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store/store';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '.';
import { useGetGamesQuery } from '../../store/services/gamesApi';
import { gamesMock } from '../../tests/mocks/gamesMock';

jest.mock('../../store/services/gamesApi', () => ({
  useGetGamesQuery: jest.fn(),
}));

function Wrapper(props: { children: ReactNode }): JSX.Element {
  return (
    <BrowserRouter>
      <Provider store={store}>{props.children}</Provider>
    </BrowserRouter>
  );
}

describe('Home', () => {
  it('should render static header', async () => {
    (useGetGamesQuery as jest.Mock).mockReturnValue({
      data: undefined,
    });
    render(<Home />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(screen.getByText('FTPGames')).toBeInTheDocument();
    });
  });

  it('render spin when isLoading', async () => {
    (useGetGamesQuery as jest.Mock).mockReturnValue({
      isLoading: true,
    });
    render(<Home />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(screen.getByTestId('loader')).toBeTruthy();
    });
  });
});

describe('when we have games data', () => {
  it('cards render', async () => {
    (useGetGamesQuery as jest.Mock).mockReturnValue({
      data: gamesMock,
      isSuccess: true,
    });
    render(<Home />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(screen.getByText('Overwatch 2')).toBeInTheDocument();
      expect(screen.getByText('Diablo Immortal')).toBeInTheDocument();
    });
  });

  it('pagination render', async () => {
    (useGetGamesQuery as jest.Mock).mockReturnValue({
      isSuccess: true,
    });
    render(<Home />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(screen.getByTestId('page')).toBeTruthy();
    });
  });
});
