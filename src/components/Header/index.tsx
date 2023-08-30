import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';

import { Layout } from 'antd';
const { Header } = Layout;

function AppHeader(): JSX.Element {
  const navigate = useNavigate();

  const handleNavigate = (): void => navigate('/');

  return (
    <Header className={styles.header}>
      <h1 className={styles.title} onClick={handleNavigate}>
        FTPGames
      </h1>
    </Header>
  );
}

export default AppHeader;
