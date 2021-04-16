import React from 'react';
import classNames from 'classnames';

import styles from './Loader.module.css';

type Props = {
  compressed?: boolean;
  halfPage?: boolean;
};

const Loader: React.FC<Props> = ({ compressed, halfPage }) => {
  const loaderClass = classNames({
    [styles.loader]: true,
    [styles['-compressed']]: compressed,
    [styles['-half-page']]: halfPage,
  });

  return (
    <div className={loaderClass}>
      <div className={styles.inner}>
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
};

export default Loader;
