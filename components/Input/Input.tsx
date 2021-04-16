import React, { InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Input.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'tel' | 'textarea' | 'search' | 'number' | 'password' | 'email' | undefined;
  name: string;
  placeholder: string;
  helpText?: string;
  error?: string;
  success?: string;
  full?: boolean;
  disabled?: boolean;
  autocomplete?: string;
}

const Input: React.FC<Props> = ({
  type = 'text',
  value = '',
  name,
  placeholder,
  helpText,
  error,
  success,
  disabled,
  onChange,
  full,
  autocomplete,
  ...props
}) => {
  const showHelpText = helpText || error || success;

  const inputClass = classNames({
    [styles.input]: true,
    [styles['-disabled']]: disabled,
    [styles['-error']]: error,
    [styles['-success']]: success && !error,
    [styles['-full']]: full,
    [styles['-touched']]: value !== '',
    [styles['-show-message']]: showHelpText,
  });

  return (
    <div className={inputClass}>
      <input
        className={styles.field}
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        autoComplete={autocomplete}
        aria-invalid={!!error}
        aria-describedby={`input-${name}-feedback`}
        {...props}
      />
      <label htmlFor={name} className="sr">
        {placeholder}
      </label>
      <div className={styles.shadow} />
      <div className={styles['border-hider']} aria-hidden>
        {placeholder}
      </div>
      <div className={styles['placeholder-wrapper']} aria-hidden>
        <span className={styles.placeholder}>{placeholder}</span>
      </div>
      <div id={`input-${name}-feedback`}>
        {showHelpText && (
          <div className={styles.message} aria-live="polite">
            <p className="sr">
              {(error || success || helpText) && `${error && 'Feil: '}${placeholder}`}
            </p>
            {error || success || helpText}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
