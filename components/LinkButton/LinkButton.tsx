import React from 'react';
import classNames from 'classnames';

import styles from './LinkButton.module.css';

type Props = {
  children: JSX.Element[] | JSX.Element | string;
  block?: boolean;
  type?: 'button' | 'submit' | 'reset';
  isActive?: boolean;
  isWarning?: boolean;
  disabled?: boolean;
  full?: boolean;
  underlined?: boolean;
  noUnderline?: boolean;
  onClick?: () => void;
};

const LinkButton: React.FC<Props> = ({
  block,
  isActive,
  isWarning,
  disabled,
  full,
  type = 'button',
  underlined,
  noUnderline,
  onClick,
  children,
}) => {
  const linkClass = classNames({
    [styles['link']]: true,
    [styles['-block']]: block,
    [styles['-warning']]: isWarning,
    [styles['-active']]: isActive,
    [styles['-full']]: full,
    [styles['-disabled']]: disabled,
    [styles['-underlined']]: underlined,
    [styles['-no-underline']]: noUnderline,
  });

  return (
    <button
      className={linkClass}
      type={type}
      disabled={disabled}
      data-cy="link-button"
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};

export default LinkButton;
