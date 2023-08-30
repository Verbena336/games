import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './GameHeader.module.scss';

import { LeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';

type Props = { title: string };

function GameHeader({ title }: Props): JSX.Element {
  const navigate = useNavigate();

  const handleNavigate = (): void => navigate('/');

  return (
    <header className={styles.header}>
      <Button type="text" onClick={handleNavigate}>
        <LeftOutlined />
        Home
      </Button>
      <h3 className={styles.title}>{title}</h3>
    </header>
  );
}

export default GameHeader;
