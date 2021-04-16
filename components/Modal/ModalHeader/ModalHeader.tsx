import React from 'react';

import styles from './ModalHeader.module.css';

type Props = {
  title: string;
};

const ModalHeader: React.FC<Props> = ({ title }) => {
  return (
    <div className={styles.header}>
      <div className={styles.title} id="modal-header-title">
        {title}
      </div>
    </div>
  );
};

export default ModalHeader;
