import React from 'react';
import classNames from 'classnames';

import styles from './ButtonGroup.module.css';

interface Option {
  text: string;
  value?: string | number;
  disabled?: boolean;
}

type Props = {
  name: string;
  selected?: string | undefined | number;
  options?: Option[];
  isToggle?: boolean;
  noPadding?: boolean;
  disabled?: boolean;
  wrap?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ButtonGroup: React.FC<Props> = ({
  name,
  selected,
  options = [],
  isToggle,
  noPadding,
  disabled,
  wrap,
  onChange,
}) => {
  const ariaProps = {
    role: 'radiogroup',
    'aria-labelledby': `${name}-label`,
  };

  const buttonGroupClass = classNames({
    [styles['button-group']]: true,
    [styles['-toggle']]: isToggle,
    [styles['-no-padding']]: noPadding,
    [styles['-disabled']]: disabled,
    [styles['-wrap']]: wrap,
  });

  return (
    <div className={buttonGroupClass}>
      <div className="sr" id={`${name}-label`}>
        {name}
      </div>
      <ul className={styles.inner} {...ariaProps}>
        {options.map((option) => (
          <li className={styles.item} key={`${name}-${option.value}`}>
            <input
              type="radio"
              id={`radio-${name}-${option.value}`}
              name={name}
              className={styles.input}
              value={option.value}
              disabled={disabled || option.disabled}
              checked={option.value === selected}
              onChange={onChange}
            />
            <label className={styles.label} htmlFor={`radio-${name}-${option.value}`}>
              {option.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ButtonGroup;
