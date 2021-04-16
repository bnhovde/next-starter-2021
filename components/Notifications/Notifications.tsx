import React from 'react';
import classNames from 'classnames';

import { Notification } from 'types';

import IconButton from 'components/IconButton';

import styles from './Notifications.module.css';

type Props = {
  items?: Notification[];
  onDismiss: (id: string) => void;
};

const Notifications: React.FC<Props> = ({ items, onDismiss }) => {
  const notificationsClass = classNames({
    [styles['notifications']]: true,
    [styles['-open']]: items?.length,
  });

  return (
    <ul className={notificationsClass}>
      {items?.map((item) => {
        const itemClass = classNames({
          [styles['item']]: true,
          [styles['-alert']]: item.isAlert,
        });

        return (
          <li
            key={item.id}
            className={itemClass}
            role="alert"
            aria-labelledby={`notifications-title-${item.id}`}
            aria-describedby={`notifications-text-${item.id}`}
          >
            <div className={styles.header}>
              <h4 id={`notifications-title-${item.id}`}>{item.title}</h4>

              <IconButton
                inverted={!item.isAlert}
                name="lukk"
                type="close"
                onClick={() => onDismiss(item.id)}
              />
            </div>
            <div className={styles.body}>
              <p id={`notifications-text-${item.id}`}>{item.text}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Notifications;
