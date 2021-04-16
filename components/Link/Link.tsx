/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import NextLink from 'next/link';
import classNames from 'classnames';

import styles from './Link.module.css';

type Props = {
  children: JSX.Element[] | JSX.Element | string;
  href: string;
  as?: string;
  block?: boolean;
  newTab?: boolean;
  onClick?: () => void;
};

const Link: React.FC<Props> = (props) => {
  const linkClass = classNames({
    [styles['link']]: true,
    [styles['-block']]: props.block,
  });

  const extraProps = {} as { target?: string; rel?: string };

  if (props.newTab) {
    extraProps.target = '_blank';
    extraProps.rel = 'noreferrer';
  }

  return (
    <NextLink href={props.href} as={props.as}>
      <a className={linkClass} {...extraProps}>
        {props.children}
      </a>
    </NextLink>
  );
};

export default React.memo(Link);
