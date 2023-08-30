import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Result } from 'antd';

type Props = { status: ResultStatus; text: string; isButton: boolean };
type ResultStatus = { status: 'success' | 'error' | 'info' | 'warning' | '404' | '403' | '500' };

function ErrorPage({ status, text, isButton }: Props): JSX.Element {
  const navigate = useNavigate();

  const handleNavigate = (): void => {
    navigate('/');
  };
  return (
    <Result
      data-testid="error"
      status={status.status}
      title="Error"
      subTitle={text}
      extra={
        isButton && (
          <Button type="primary" onClick={handleNavigate}>
            Back Home
          </Button>
        )
      }
    />
  );
}

export default ErrorPage;
