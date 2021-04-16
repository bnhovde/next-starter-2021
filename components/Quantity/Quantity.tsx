import React from 'react';

import IconButton from 'components/IconButton';

import styles from './Quantity.module.css';

type Props = {
  id: string;
  label: string;
  value: number;
  minAmount?: number;
  maxAmount?: number;
  disabled?: boolean;
  size?: 'small' | 'regular' | 'large' | undefined;
  onAdd?: () => void;
  onRemove?: () => void;
};

const Quantity: React.FC<Props> = ({
  id,
  label,
  value,
  minAmount = 0,
  maxAmount = 100,
  disabled,
  onAdd,
  onRemove,
  size = 'large',
}) => {
  return (
    <div className={styles.quantity}>
      <span className="sr">{`Number of ${label} selected: ${value}`}</span>

      {value > 0 && (
        <div className={styles.button}>
          <IconButton
            name={`remove ${label} - ${value} is selected`}
            type={'remove'}
            onClick={onRemove}
            size={size}
            disabled={value <= minAmount || disabled}
          />
        </div>
      )}

      {value > 0 && (
        <input
          className={styles.input}
          name={id}
          value={value}
          disabled
          id={`${id}-label`}
          aria-hidden
        />
      )}

      <div className={styles.button}>
        <IconButton
          name={`add ekstra ${label} - ${value} is selected`}
          type={value > 0 ? 'add-red' : 'add'}
          onClick={onAdd}
          size={size}
          disabled={value >= maxAmount || disabled}
        />
      </div>
    </div>
  );
};

export default Quantity;
