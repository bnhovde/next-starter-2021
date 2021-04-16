import React from 'react';
import classNames from 'classnames';

import styles from './Grid.module.css';

type Props = {
  children: JSX.Element[] | JSX.Element | string;
  columns?: number;
  narrow?: boolean;
  wide?: boolean;
  fixed?: boolean;
};

const Grid: React.FC<Props> = ({ columns, narrow, wide, fixed, children }) => {
  const gridClass = classNames({
    [styles['grid']]: true,
    [styles['-narrow']]: narrow,
    [styles['-wide']]: wide,
    [styles['-fixed']]: fixed,
    [styles[`-two-columns`]]: columns === 2,
    [styles[`-three-columns`]]: columns === 3,
    [styles[`-four-columns`]]: columns === 4,
  });

  return <div className={gridClass}>{children}</div>;
};

export default Grid;
