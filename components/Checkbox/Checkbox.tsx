import React from 'react';
import classNames from 'classnames';

import Icon from 'components/Icon';

import styles from './Checkbox.module.css';

type Props = {
  name: string;
  title?: string;
  label?: string;
  ariaLabel?: string;
  value?: string;
  size?: 'small' | 'regular' | 'large' | undefined;
  checked: boolean;
  disabled?: boolean;
  errorMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<Props> = ({
  name,
  title,
  label,
  ariaLabel,
  size,
  checked,
  onChange,
  value,
  disabled,
  errorMessage,
}) => {
  const checkboxClass = classNames({
    [styles['wrapper']]: true,
    [styles[`-disabled`]]: disabled,
  });

  return (
    <div className={checkboxClass}>
      <input
        type="checkbox"
        id={name}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={styles.input}
        aria-checked={checked}
        disabled={disabled}
      />
      <div className={styles.icon}>
        {checked && <Icon type={'checked'} size={size || 'large'} />}
        {!checked && <Icon type={'unchecked'} size={size || 'large'} />}
      </div>
      {(label || errorMessage) && (
        <div className={styles.text}>
          {title && <p aria-hidden={!!ariaLabel}>{title}</p>}
          {label && <small aria-hidden={!!ariaLabel}>{label}</small>}
          {errorMessage && <small className="warning">{errorMessage}</small>}
        </div>
      )}
      <div className={styles.focus}></div>
      <label className={styles.label} htmlFor={name}>
        <span className="sr-static">{ariaLabel || title}</span>
      </label>
    </div>
  );
};

export default Checkbox;
