import React from 'react';
import classNames from 'classnames';

import Icon from 'components/Icon';

import styles from './Avatar.module.css';

type Props = {
  initials?: string;
  icon?: string;
  theme?: 'dark' | 'light';
};

const Avatar: React.FC<Props> = ({ initials, icon, theme }) => {
  const avatarClass = classNames({
    [styles.avatar]: true,
    [styles['-dark']]: theme && theme === 'dark',
    [styles['-light']]: theme && theme === 'light',
  });

  return (
    <div className={avatarClass}>
      <div className={styles.inner}>
        {initials && <span>{initials}</span>}
        {icon && <Icon type={icon} size="small" />}
      </div>
    </div>
  );
};

export default Avatar;
