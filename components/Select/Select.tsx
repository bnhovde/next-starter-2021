import React from 'react';
import classNames from 'classnames';

import { SelectOption } from 'types';

import Icon from 'components/Icon';

import styles from './Select.module.css';

type Props = {
  name: string;
  label?: string;
  placeholder: string;
  selected?: string | number | undefined;
  options?: SelectOption[];
  full?: boolean;
  disabled?: boolean;
  bold?: boolean;
  inverted?: boolean;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select: React.FC<Props> = ({
  name,
  label,
  placeholder,
  selected,
  options = [],
  onChange,
  full,
  disabled,
  inverted,
  bold,
}) => {
  const selectClass = classNames({
    [styles['select']]: true,
    [styles['-full']]: full,
    [styles['-disabled']]: disabled,
    [styles['-inverted']]: inverted,
    [styles['-bold']]: bold,
  });

  const selectedOption = options.find((o) => o.value === selected);

  return (
    <div className={selectClass}>
      <div className={styles.placeholder} aria-hidden>
        {selectedOption ? selectedOption.text : placeholder}
      </div>
      <div className={styles.arrow}>
        <Icon type="chevron-down" />
      </div>
      <select
        className={styles.field}
        name={name}
        aria-label={label}
        id={`select-${name}`}
        value={selected}
        onBlur={onChange}
        onChange={onChange}
      >
        <option hidden value="">
          {placeholder}
        </option>
        {options
          .filter((option) => !option.disabled)
          .map((option) => (
            <option key={`${name}-${option.value}`} value={option.value} disabled={option.disabled}>
              {option.text}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
