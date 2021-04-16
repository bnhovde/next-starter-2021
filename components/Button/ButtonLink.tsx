/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import styles from './Button.module.css';

type Props = {
  children: JSX.Element[] | JSX.Element | string;
  href: string;
  full?: boolean;
  isExternal?: boolean;
  disabled?: boolean;
};

const ButtonLink: React.FC<Props> = ({ children, href, full, isExternal, disabled }) => {
  const buttonClass = classNames({
    [styles['button']]: true,
    [styles['-link']]: true,
    [styles['-disabled']]: disabled,
    [styles['-full']]: full,
  });

  if (isExternal) {
    return (
      <a href={href} className={buttonClass} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={buttonClass}>{children}</a>
    </Link>
  );
};

export default ButtonLink;
