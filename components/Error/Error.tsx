import Icon from 'components/Icon';
import React from 'react';

import styles from './Error.module.css';

type Props = {
  children?: JSX.Element[] | JSX.Element | string;
};

const Error: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.error}>
      <div className={styles.icon}>
        <Icon size="small" type="warning" />
      </div>
      <div className={styles.body} role="alert">
        {children}
      </div>
    </div>
  );
};

export default Error;
