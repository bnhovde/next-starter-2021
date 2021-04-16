import React from 'react';

import Container from 'components/Container';
import Button from 'components/Button';

import styles from './ModalFooter.module.css';

type Props = {
  confirmText?: string;
  cancelText?: string;
  disabled?: boolean;
  controlsForm?: string;
  onCancel?: () => void;
  onSubmit?: () => void;
};

const ModalFooter: React.FC<Props> = ({
  confirmText,
  cancelText,
  controlsForm,
  disabled,
  onCancel,
  onSubmit,
}) => {
  return (
    <>
      <div className={styles.footer} data-cy="modal-footer">
        <Container width="min">
          <div className={styles.actions}>
            {cancelText && (
              <Button
                type={controlsForm ? 'reset' : 'button'}
                onClick={onCancel}
                form={controlsForm}
              >
                {cancelText}
              </Button>
            )}
            {confirmText && (
              <Button
                type={controlsForm ? 'submit' : 'button'}
                onClick={onSubmit}
                disabled={disabled}
                form={controlsForm}
              >
                {confirmText}
              </Button>
            )}
          </div>
        </Container>
      </div>
      <div className={styles.spacer}></div>
    </>
  );
};

export default ModalFooter;
