import React from 'react';
import classNames from 'classnames';

import slugify from 'utilities/slugify';

import Block from 'components/Block';
import Button from 'components/Button';
import FocusTrap from 'components/FocusTrap';
import LinkButton from 'components/LinkButton';

import styles from './Dialog.module.css';

type Props = {
  isOpen: boolean;
  title: string;
  message?: string;
  children?: JSX.Element[] | JSX.Element | string;
  controlsForm?: string;
  confirmText?: string;
  cancelText?: string;
  disabled?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
};

const Dialog: React.FC<Props> = ({
  isOpen,
  title,
  message,
  confirmText,
  cancelText,
  controlsForm,
  children,
  disabled,
  onClose,
  onConfirm,
}) => {
  const dialogClass = classNames({
    [styles['dialog']]: true,
    [styles['-open']]: isOpen,
  });

  return (
    <div className={dialogClass}>
      {isOpen && <div className={styles.background}></div>}
      <div className={styles.panel}>
        <FocusTrap
          onExit={onClose}
          active={isOpen}
          visible={isOpen}
          name={slugify(title)}
          labelledby="dialog-title"
          describedby="dialog-body"
        >
          <>
            <div className={styles.header} id="dialog-title">
              <p>{title}</p>
            </div>
            <div className={styles.body} id="dialog-body">
              {message && <p>{message}</p>}
              {children && children}
            </div>
            <div className={styles.divider}>
              <hr aria-hidden />
            </div>
            <div className={styles.footer}>
              <Button
                type={controlsForm ? 'submit' : 'button'}
                disabled={disabled}
                onClick={onConfirm}
                full
              >
                {confirmText || 'Bekreft'}
              </Button>
              <Block top={3}>
                <LinkButton disabled={disabled} onClick={onClose} full>
                  {cancelText || 'Avbryt'}
                </LinkButton>
              </Block>
            </div>
          </>
        </FocusTrap>
      </div>
    </div>
  );
};

export default Dialog;
