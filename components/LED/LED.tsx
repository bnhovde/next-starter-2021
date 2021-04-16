import React from 'react';
import classNames from 'classnames';

import styles from './LED.module.css';

type Props = {
  active?: boolean;
  padded?: boolean;
};

const LED: React.FC<Props> = ({ active, padded }) => {
  const ledClass = classNames({
    [styles['led']]: true,
    [styles['-active']]: active,
    [styles['-padded']]: padded,
  });

  return <div className={ledClass} />;
};

export default LED;
