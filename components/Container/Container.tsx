import React from 'react';
import classNames from 'classnames';

import styles from './Container.module.css';

type Props = {
  children: JSX.Element[] | JSX.Element | string | null;
  width?: 'min' | 'narrow' | 'regular' | 'wide' | 'full';
  theme?: 'dark' | 'light';
  bleed?: 'mobile' | 'tablet';
  id?: string;
};

const Container: React.FC<Props> = ({ children, width = 'max', theme, bleed, id, ...props }) => {
  const containerClass = classNames({
    container: true,
    [styles['-dark']]: theme && theme === 'dark',
    [styles['-light']]: theme && theme === 'light',
    [styles[`-bleed-${bleed}`]]: bleed,
    [styles[`-${width}`]]: width || 'regular',
  });

  return (
    <div className={containerClass} id={id} {...props}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};

export default Container;
