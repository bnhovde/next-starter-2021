import React, { useContext } from 'react';

import UiContext from 'context/UiContext';

import Notifications from 'components/Notifications';

import styles from './Notifications.module.css';

const NotificationController: React.FC = () => {
  const { state: uiState, clearNotification } = useContext(UiContext);

  const handleDismiss = (id: string) => {
    clearNotification({ id });
  };

  return (
    <div className={styles.wrapper} id="notifications-container" aria-live="polite">
      <Notifications items={uiState.notifications} onDismiss={(id) => handleDismiss(id)} />
    </div>
  );
};

export default NotificationController;
