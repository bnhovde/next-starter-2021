import React from 'react';
import classNames from 'classnames';

import styles from './Block.module.css';

type Props = {
  children: JSX.Element[] | JSX.Element | string;
  top?: number | number[];
  bottom?: number | number[];
  align?: string;
  id?: string;
};

function getValue(value: number | number[] | undefined, isMobile?: boolean) {
  if (!value) {
    return false;
  }
  if (Array.isArray(value)) {
    return isMobile ? value[0] : value[1];
  }
  return value;
}

const Block: React.FC<Props> = ({ children, top, bottom, align, ...props }) => {
  const blockClass = classNames({
    block: true,
    [styles[`-top-${getValue(top)}`]]: top,
    [styles[`-bottom-${getValue(bottom)}`]]: bottom,
    [styles[`-top-mobile-${getValue(top, true)}`]]: Array.isArray(top),
    [styles[`-bottom-mobile-${getValue(bottom, true)}`]]: Array.isArray(bottom),
    [styles[`-align-${align}`]]: align,
  });

  return (
    <div className={blockClass} {...props}>
      {children}
    </div>
  );
};

export default Block;
