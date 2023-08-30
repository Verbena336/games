import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store/store';
import { render, screen, waitFor } from '@testing-library/react';
import GameHeader from '.';

function Wrapper(props: { children: ReactNode }): JSX.Element {
  return (
    <BrowserRouter>
      <Provider store={store}>{props.children}</Provider>
    </BrowserRouter>
  );
}

describe('GameHeader', () => {
  it('should render with title', async () => {
    render(<GameHeader title={'Overwatch 2'} />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(screen.getByText('Overwatch 2')).toBeInTheDocument();
    });
  });
});
