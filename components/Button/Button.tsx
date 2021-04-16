import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.css';

type Props = {
  children: JSX.Element[] | JSX.Element | string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  label?: string;
  full?: boolean;
  form?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({
  type = 'button',
  children,
  label,
  full,
  form,
  loading,
  disabled,
  onClick,
}) => {
  const buttonClass = classNames({
    [styles['button']]: true,
    [styles['-disabled']]: disabled,
    [styles['-full']]: full,
  });

  const ariaProps: { 'aria-label'?: string; 'aria-busy'?: boolean } = {};

  if (label) {
    ariaProps['aria-label'] = label;
  }

  if (loading) {
    ariaProps['aria-busy'] = true;
    ariaProps['aria-label'] = 'laster';
  }

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || loading}
      form={form}
      {...ariaProps}
    >
      {children}
    </button>
  );
};

export default Button;
