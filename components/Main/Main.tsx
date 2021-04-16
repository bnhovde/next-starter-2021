import React from 'react';
import Router from 'next/router';

import styles from './Main.module.css';
const isProduction = process.env.NODE_ENV === 'production';

type Props = {
  children: JSX.Element[] | JSX.Element | string;
};

Router.events.on('routeChangeComplete', (url) => {
  if (!isProduction) return;
  window.analytics.page(url);
});

const Main: React.FC<Props> = ({ children }) => <main className={styles.main}>{children}</main>;

export default Main;
