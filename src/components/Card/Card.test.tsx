import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store/store';
import { render, screen, waitFor } from '@testing-library/react';
import Card from '.';
import { cardGameMock } from '../../tests/mocks/gamesMock';

function Wrapper(props: { children: ReactNode }): JSX.Element {
  return (
    <BrowserRouter>
      <Provider store={store}>{props.children}</Provider>
    </BrowserRouter>
  );
}

describe('Game', () => {
  it('should render card and correct link', async () => {
    render(<Card game={cardGameMock} />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(screen.getByText('Overwatch 2')).toBeInTheDocument();
      expect(screen.getByTestId('cardlink')).toHaveAttribute('href', `/game/${cardGameMock.id}`);
    });
  });
});
