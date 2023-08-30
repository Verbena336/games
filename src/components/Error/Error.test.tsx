import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store/store';
import { render, waitFor } from '@testing-library/react';
import ErrorPage from '.';

function Wrapper(props: { children: ReactNode }): JSX.Element {
  return (
    <BrowserRouter>
      <Provider store={store}>{props.children}</Provider>
    </BrowserRouter>
  );
}

describe('Error', () => {
  it('should render', async () => {
    const { container } = render(
      <ErrorPage status={{ status: '500' }} text={'test'} isButton={true} />,
      {
        wrapper: Wrapper,
      }
    );

    await waitFor(() => {
      expect(container.querySelector('.ant-result-500')).toBeInTheDocument();
    });
  });
});
