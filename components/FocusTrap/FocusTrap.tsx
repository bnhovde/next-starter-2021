/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { Component } from 'react';
import FocusTrap from 'focus-trap-react';
import classNames from 'classnames';

import styles from './FocusTrap.module.css';

type FocusTrapType = {
  active: boolean;
  visible?: boolean;
  className: string;
  labelledby: string;
  describedby: string;
  name: string;
  children: JSX.Element;
  onExit?: () => void;
};

class FocusTrapWrapper extends Component<FocusTrapType> {
  static defaultProps = {
    active: true,
    className: 'focus-trap',
  };

  render(): JSX.Element | null {
    const { active, visible, className, children, onExit } = this.props;

    if (!visible) {
      return null;
    }

    const focusTrapClass = classNames({
      [`${className}-wrapper`]: true,
      [styles['wrapper']]: true,
    });

    const checkIfShouldClose = (event: MouseEvent): boolean => {
      // Don't close modal if notification is clicked
      try {
        const notificationContainer = document.querySelector('#notifications-container');
        if (event.target instanceof Element && notificationContainer) {
          const isNotification = notificationContainer.contains(event.target.parentNode);
          return !isNotification;
        }
        return true;
      } catch (error) {
        return true;
      }
    };

    const checkIfClickAllowed = (event: MouseEvent): boolean => {
      // Don't close modal if notification is clicked
      try {
        const notificationContainer = document.querySelector('#notifications-container');
        if (event.target instanceof Element && notificationContainer) {
          const isNotification = notificationContainer.contains(event.target.parentNode);
          return isNotification;
        }
        return false;
      } catch (error) {
        return false;
      }
    };

    return (
      <FocusTrap
        active={active}
        className={className}
        focusTrapOptions={{
          onDeactivate: onExit,
          clickOutsideDeactivates: checkIfShouldClose,
          allowOutsideClick: checkIfClickAllowed,
          fallbackFocus: `#${this.props.name}-trap`,
        }}
      >
        <div
          id={`${this.props.name}-trap`}
          className={focusTrapClass}
          role="dialog"
          aria-modal="true"
          aria-labelledby={this.props.labelledby}
          aria-describedby={this.props.describedby}
          tabIndex={-0}
        >
          {children}
        </div>
      </FocusTrap>
    );
  }
}

export default FocusTrapWrapper;
