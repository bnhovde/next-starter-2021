import React from 'react';
import classNames from 'classnames';

import styles from './TextLoader.module.css';

type Props = {
  isLoading?: boolean;
  children: JSX.Element[] | JSX.Element | string;
};

const TextLoader: React.FC<Props> = ({ isLoading, children }) => {
  const textLoaderClass = classNames({
    [styles['text-loader']]: true,
    [styles['-loading']]: isLoading,
  });

  return <div className={textLoaderClass}>{children}</div>;
};

export default TextLoader;
