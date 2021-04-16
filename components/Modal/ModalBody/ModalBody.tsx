import React from 'react';

import Container from 'components/Container';

import styles from './ModalBody.module.css';

type Props = {
  children: JSX.Element[] | JSX.Element | string;
  width?: 'max' | 'wide' | 'narrow' | 'min' | 'form';
};

const ModalBody: React.FC<Props> = ({ width, children }) => {
  if (width) {
    return (
      <div className={styles.body}>
        <Container width={width}>{children}</Container>
      </div>
    );
  }
  return <div className={styles.body}>{children}</div>;
};

export default ModalBody;
