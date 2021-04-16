import React from 'react';
import classNames from 'classnames';

import styles from './Flex.module.css';

type Props = {
  children: JSX.Element[] | JSX.Element | string;
  align?: string;
  justify?: string;
  column?: boolean;
  wrap?: boolean;
  full?: boolean;
};

const Flex: React.FC<Props> = ({ align, column, justify, wrap, full, children }) => {
  const flexClass = classNames({
    [styles['flex']]: true,
    [styles[`-align-${align}`]]: align,
    [styles[`-justify-${justify}`]]: justify,
    [styles['-column']]: column,
    [styles['-wrap']]: wrap,
    [styles['-full']]: full,
  });

  return <div className={flexClass}>{children}</div>;
};

export default Flex;
