import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import useSwipe from 'hooks/useSwipe';
import FocusTrap from 'components/FocusTrap';

import styles from './Drawer.module.css';

type Props = {
  children: JSX.Element;
  initialFocus?: string;
  isOpen?: boolean;
  onClose?: () => void;
};

const Drawer: React.FC<Props> = ({ children, isOpen, onClose }) => {
  const { onTouchStart, onTouchMove, onTouchEnd, isSwiping, distance } = useSwipe({
    direction: 'horizontal',
    minValue: -1000,
    maxValue: 0,
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

  const drawerClass = classNames({
    [styles['drawer']]: true,
    [styles['-open']]: isOpen,
    [styles['-swiping']]: isSwiping,
  });

  return (
    <div className={drawerClass}>
      <div className={styles.background}></div>
      <div
        className={styles.panel}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={isSwiping ? { transform: `translateX(calc(100% + ${distance}px))` } : {}}
      >
        <FocusTrap
          onExit={onClose}
          active={isOpen && animationFinished}
          visible={isOpen}
          name="navigation-drawer"
          labelledby="drawer-label"
          describedby="drawer-description"
        >
          {children}
        </FocusTrap>
      </div>
    </div>
  );
};

export default Drawer;
