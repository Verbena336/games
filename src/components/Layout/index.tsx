import React, { ReactNode } from 'react';

import AppHeader from '../Header';

import styles from './Layout.module.scss';

import { Layout } from 'antd';
const { Content } = Layout;

type LayoutProps = {
  children: ReactNode;
};

const AppLayout = ({ children }: LayoutProps): JSX.Element => (
  <Layout className={styles.wrapper}>
    <AppHeader />
    <Content className={styles.main}>{children}</Content>
  </Layout>
);

export default AppLayout;
