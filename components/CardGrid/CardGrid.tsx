import React from 'react';
import classNames from 'classnames';

import styles from './CardGrid.module.css';

type Props = {
  narrow?: boolean;
  animated?: boolean;
};

const CardGrid: React.FC<Props> = ({ children, narrow, animated }) => {
  const gridClass = classNames({
    [styles['grid']]: !narrow,
    [styles['-narrow']]: narrow,
    [styles['-animated']]: animated,
  });

  return <div className={gridClass}>{children}</div>;
};

CardGrid.defaultProps = {
  narrow: false,
};

export default CardGrid;
