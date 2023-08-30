import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store/store';
import { render, screen, waitFor } from '@testing-library/react';
import { useGetGameByIdQuery } from '../../store/services/gamesApi';
import { mockGame } from '../../tests/mocks/gameMock';
import Game from '.';

jest.mock('../../store/services/gamesApi', () => ({
  useGetGameByIdQuery: jest.fn(),
}));

function Wrapper(props: { children: ReactNode }): JSX.Element {
  return (
    <BrowserRouter>
      <Provider store={store}>{props.children}</Provider>
    </BrowserRouter>
  );
}

describe('Game', () => {
  it('should render static header', async () => {
    (useGetGameByIdQuery as jest.Mock).mockReturnValue({
      data: undefined,
    });
    render(<Game />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(screen.getByText('FTPGames')).toBeInTheDocument();
    });
  });

  it('render spin when isLoading', async () => {
    (useGetGameByIdQuery as jest.Mock).mockReturnValue({
      isLoading: true,
    });
    render(<Game />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(screen.getByTestId('loader')).toBeTruthy();
    });
  });
});

describe('when we have games data', () => {
  it('cards render', async () => {
    (useGetGameByIdQuery as jest.Mock).mockReturnValue({
      data: mockGame,
      isSuccess: true,
    });
    render(<Game />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(screen.getByText('Overwatch 2')).toBeInTheDocument();
      expect(screen.getByText('Shooter')).toBeInTheDocument();
      expect(screen.getByText('04.10.2022')).toBeInTheDocument();
      expect(screen.getByText('Blizzard Entertainment')).toBeInTheDocument();
    });
  });
});
