import React from 'react';

import styles from './A11yButton.module.css';

type Props = {
  text: string;
  target?: string;
  onClick?: () => void;
};

const A11yButton: React.FC<Props> = ({ text, target, onClick }) => {
  const onTrigger = () => {
    if (target) {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        (element as HTMLElement).focus();
      }
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={styles.button} onClick={onTrigger}>
      {text}
    </button>
  );
};

export default A11yButton;
