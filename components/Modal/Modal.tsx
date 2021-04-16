import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import useSwipe from 'hooks/useSwipe';
import Icon from 'components/Icon';
import styles from './Modal.module.css';
import FocusTrap from 'components/FocusTrap';

type Props = {
  children: JSX.Element[] | JSX.Element | string;
  name: string;
  label?: string;
  description?: string;
  isOpen?: boolean;
  isPaused?: boolean;
  isGray?: boolean;
  onClose?: () => void;
};

const Modal: React.FC<Props> = ({
  name,
  label,
  description,
  children,
  isOpen,
  isPaused,
  isGray,
  onClose,
}) => {
  const { onTouchStart, onTouchMove, onTouchEnd, isSwiping, distance } = useSwipe({
    onTrigger: onClose,
  });

  // Wait for modal to be fully visible before triggering focustrap
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    function trigger() {
      setAnimationFinished(true);
    }

    if (isOpen) {
      setTimeout(() => {
        trigger();
      }, 300);
    } else {
      setAnimationFinished(false);
    }
  }, [isOpen]);

  const modalClass = classNames({
    [styles['modal']]: true,
    [styles['-open']]: isOpen,
    [styles['-gray']]: isGray,
    [styles['-swiping']]: isSwiping,
  });

  return (
    <div className={modalClass} aria-hidden={isPaused}>
      <div className={styles.background} aria-hidden></div>
      <div
        className={styles.panel}
        style={
          isSwiping ? { transform: `translateY(calc(-100% + ${distance}px)) translateX(-50%)` } : {}
        }
      >
        <FocusTrap
          onExit={onClose}
          visible={isOpen}
          active={isOpen && animationFinished}
          name={name}
          labelledby={`${name}-title`}
          describedby={`${name}-inner`}
        >
          <div className={styles.dialog}>
            <button className={styles['a11y-close']} tabIndex={0} name="lukk" onClick={onClose}>
              Lukk
            </button>

            <h1 className="sr" id={`${name}-title`}>
              {label || name}
            </h1>

            <button
              name="lukk"
              tabIndex={-1}
              className={styles['swipe-line']}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              aria-hidden
            >
              <div className={styles.line} />
              <span className="sr">Swipe for å lukke</span>
            </button>

            <div id={`${name}-inner`} className={styles.inner} role="document">
              {description && <p className="sr">{description}</p>}
              {isOpen && children}
            </div>
          </div>
        </FocusTrap>
      </div>

      <button className={styles['close-button']} name="lukk" onClick={onClose}>
        <span>Lukk</span>
        <Icon size="small" type="close" />
      </button>
    </div>
  );
};

export default Modal;
