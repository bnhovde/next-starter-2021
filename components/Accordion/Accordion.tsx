import React, { useState } from 'react';
import classNames from 'classnames';

import Icon from 'components/Icon';

import styles from './Accordion.module.css';

type Props = {
  name: string;
  text: string;
  openByDefault?: boolean;
  gray?: boolean;
  white?: boolean;
  children: JSX.Element[] | JSX.Element | string;
};

const Accordion: React.FC<Props> = ({
  name,
  text,
  gray,
  white,
  openByDefault = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(openByDefault);
  const ariaName = name.replace(/ /g, '_');

  const accordionClass = classNames({
    [styles['accordion']]: true,
    [styles['-gray']]: gray,
    [styles['-white']]: white,
    [styles['-open']]: isOpen,
  });

  return (
    <div className={accordionClass}>
      <button
        name={name}
        className={styles.button}
        aria-controls={`accordion-section-${ariaName}`}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="strong" id={`accordion-${ariaName}`}>
          {text}
        </span>
        <div className={styles.icon}>
          <Icon type="chevron-down" inverted={white} />
        </div>
      </button>
      <div
        className={styles.contents}
        id={`accordion-section-${ariaName}`}
        aria-labelledby={`accordion-${ariaName}`}
      >
        {isOpen && <div className={styles.children}>{children}</div>}
      </div>
    </div>
  );
};

export default Accordion;
