import React from 'react';
import classNames from 'classnames';

import styles from './Card.module.css';

type Props = {
  children?: JSX.Element[] | JSX.Element | string;
  full?: boolean;
  outlined?: boolean;
  animated?: boolean;
};

const Card: React.FC<Props> = ({ children, full, outlined, animated }) => {
  const cardClass = classNames({
    [styles['card']]: true,
    [styles['-full']]: full,
    [styles['-outlined']]: outlined,
    [styles['-animated']]: animated,
  });

  return <div className={cardClass}>{children}</div>;
};

export default Card;
