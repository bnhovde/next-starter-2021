import React, { useState } from 'react';

import Icon from 'components/Icon';

import styles from './ShowMore.module.css';

type Props = {
  name: string;
  label?: string;
  openByDefault?: boolean;
  children: JSX.Element[] | JSX.Element | string;
};

const ShowMore: React.FC<Props> = ({ name, label, openByDefault = false, children }) => {
  const [isOpen, setIsOpen] = useState(openByDefault);

  return (
    <div className={styles['show-more']}>
      {!isOpen && (
        <button name={name} className={styles.button} onClick={() => setIsOpen(true)}>
          <p>{label || 'Show More'}</p>
          <Icon type="chevron-down" />
        </button>
      )}
      {isOpen && <>{children}</>}
    </div>
  );
};

export default ShowMore;
