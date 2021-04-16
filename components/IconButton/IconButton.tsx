import React from 'react';
import classNames from 'classnames';

import Icon from 'components/Icon';
import Link from 'components/Link';

import styles from './IconButton.module.css';

type Props = {
  name: string;
  id?: string;
  label?: string;
  type?: string;
  inverted?: boolean;
  disabled?: boolean;
  hasPopup?: boolean;
  controls?: string;
  text?: string;
  square?: boolean;
  size?: 'small' | 'regular' | 'large' | undefined;
  link?: string;
  onClick?: () => void;
};

const IconButton: React.FC<Props> = ({
  name,
  id,
  label,
  disabled,
  hasPopup,
  controls,
  square,
  link,
  text,
  onClick,
  ...props
}) => {
  const iconButtonClass = classNames({
    [styles['icon-button']]: true,
    [styles['-square']]: square,
    [styles['-has-text']]: text,
  });

  const ariaProps: {
    'aria-label'?: string;
    'aria-busy'?: boolean;
    'aria-haspopup'?: boolean;
    'aria-controls'?: string;
  } = {};

  if (label) {
    ariaProps['aria-label'] = label;
  }

  if (hasPopup) {
    ariaProps['aria-haspopup'] = true;
  }

  if (controls) {
    ariaProps['aria-controls'] = controls;
  }

  if (link) {
    return (
      <Link href={link} block>
        <div className={iconButtonClass}>
          <div className={styles.icon}>
            <Icon name={name} {...props} />
          </div>
          {text && <p className={styles.text}>{text}</p>}
        </div>
      </Link>
    );
  }

  return (
    <button
      name={name}
      disabled={disabled}
      className={iconButtonClass}
      onClick={onClick}
      id={id}
      {...ariaProps}
    >
      <span className="sr">{name}</span>
      <div className={styles.icon}>
        <Icon type={props.type} {...props} />
      </div>
      {text && <p className={styles.text}>{text}</p>}
    </button>
  );
};

export default IconButton;
