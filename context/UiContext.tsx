import React, { useReducer, useEffect } from 'react';

import { UiState, ModalType, DialogType, NotificationType } from 'types';

import { freeze, unFreeze } from 'utilities/bodyFreeze';
import guid from 'utilities/guid';

/**
 * Reducer
 */

enum UiActionTypes {
  OPEN_DRAWER = 'OPEN_DRAWER',
  CLOSE_DRAWER = 'CLOSE_DRAWER',
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
  OPEN_DIALOG = 'OPEN_DIALOG',
  CLOSE_DIALOG = 'CLOSE_DIALOG',
  ADD_NOTIFICATION = 'ADD_NOTIFICATION',
  CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION',
}

type UiActionPayload = {
  id?: string;
  type?: ModalType;
  dialogType?: DialogType;
  notificationType?: NotificationType;
  title?: string;
  text?: string;
  isAlert?: boolean;
  onConfirm?: () => void;
  timeoutFunc?: number;
  closeOnConfirm?: boolean;
  autoClear?: boolean;
  autoClearQuick?: boolean;
};

type UiAction = {
  type: UiActionTypes;
  payload?: UiActionPayload;
};

/**
 * Reducer
 */

export const uiReducer = (state: UiState, action: UiAction): UiState => {
  switch (action.type) {
    case UiActionTypes.OPEN_DRAWER:
      return {
        ...state,
        touched: true,
        drawer: {
          ...state.drawer,
          isOpen: true,
        },
      };
    case UiActionTypes.CLOSE_DRAWER:
      return {
        ...state,
        touched: true,
        drawer: { isOpen: false },
      };
    case UiActionTypes.OPEN_MODAL:
      return {
        ...state,
        touched: true,
        drawer: {
          ...state.drawer,
          isOpen: false,
        },
        modal: {
          ...state.modal,
          isOpen: true,
          type: action?.payload?.type,
        },
      };
    case UiActionTypes.CLOSE_MODAL:
      return {
        ...state,
        touched: true,
        modal: { isOpen: false },
      };
    case UiActionTypes.OPEN_DIALOG:
      return {
        ...state,
        touched: true,
        dialog: {
          type: action.payload?.dialogType,
          title: action.payload?.title,
          text: action.payload?.text,
          isOpen: true,
          closeOnConfirm: action.payload?.closeOnConfirm,
          onConfirm: action.payload?.onConfirm,
        },
      };
    case UiActionTypes.CLOSE_DIALOG:
      return {
        ...state,
        touched: true,
        dialog: { isOpen: false },
      };
    case UiActionTypes.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [
          ...state.notifications.filter((n) => n.type !== action.payload?.notificationType),
          {
            id: action.payload?.id || '',
            title: action.payload?.title || '',
            text: action.payload?.text || '',
            isAlert: action.payload?.isAlert,
            type: action.payload?.notificationType,
            autoClear: action.payload?.autoClear,
            autoClearQuick: action.payload?.autoClearQuick,
            timeoutFunc: action.payload?.timeoutFunc,
          },
        ],
      };
    case UiActionTypes.CLEAR_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter((i) => i.id !== action?.payload?.id),
      };
    default:
      return state;
  }
};

/**
 * Create context
 */

type ContextProps = {
  state: UiState;
  openDrawer: () => void;
  closeDrawer: () => void;
  openModal: (props: UiActionPayload) => void;
  closeModal: () => void;
  openDialog: (props: UiActionPayload) => void;
  closeDialog: () => void;
  addNotification: (props: UiActionPayload) => void;
  clearNotification: (props: UiActionPayload) => void;
};

const initialState: ContextProps = {
  state: {
    touched: false,
    drawer: { isOpen: false },
    dialog: { isOpen: false },
    notifications: [],
    modal: { isOpen: false, type: undefined },
  },
  openDrawer: () => null,
  closeDrawer: () => null,
  openModal: () => null,
  closeModal: () => null,
  openDialog: () => null,
  closeDialog: () => null,
  addNotification: () => null,
  clearNotification: () => null,
};

const UiContext = React.createContext<ContextProps>(initialState);

/**
 * Provider
 */

export const UiProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState.state);

  // Listen for changes and apply bodyfreeze if needed
  useEffect(() => {
    if (!state.touched) {
      return;
    }
    if (state?.drawer?.isOpen || state?.modal?.isOpen || state?.dialog?.isOpen) {
      return freeze();
    }
    if (!state?.drawer?.isOpen && !state?.modal?.isOpen && !state?.dialog?.isOpen) {
      return unFreeze();
    }
  }, [state]);

  const openDrawer = () => dispatch({ type: UiActionTypes.OPEN_DRAWER });
  const closeDrawer = () => dispatch({ type: UiActionTypes.CLOSE_DRAWER });

  const openModal = (props: UiActionPayload) => {
    // If modal is already open, allow it to close first
    if (state.modal?.isOpen) {
      dispatch({
        type: UiActionTypes.CLOSE_MODAL,
      });
      setTimeout(() => {
        dispatch({
          type: UiActionTypes.OPEN_MODAL,
          payload: props,
        });
      }, 0);
    } else {
      dispatch({
        type: UiActionTypes.OPEN_MODAL,
        payload: props,
      });
    }
  };

  const closeModal = () =>
    dispatch({
      type: UiActionTypes.CLOSE_MODAL,
    });

  const openDialog = (props: UiActionPayload) =>
    dispatch({
      type: UiActionTypes.OPEN_DIALOG,
      payload: props,
    });

  const closeDialog = () =>
    dispatch({
      type: UiActionTypes.CLOSE_DIALOG,
    });

  const addNotification = (props: UiActionPayload) => {
    const id = guid();
    const existingItem =
      props.notificationType && state.notifications.find((i) => i.type === props.notificationType);
    let timeoutFunc: number | undefined = undefined;

    // If duplicate, clear old timeout
    if (existingItem) {
      clearTimeout(existingItem.timeoutFunc);
    }

    if (props.autoClear) {
      const delay = props.autoClearQuick ? 5000 : 20000;
      timeoutFunc = window.setTimeout(() => {
        clearNotification({ ...props, id });
      }, delay);
    }

    dispatch({
      type: UiActionTypes.ADD_NOTIFICATION,
      payload: { ...props, id, timeoutFunc: timeoutFunc || undefined },
    });
  };

  const clearNotification = (props: UiActionPayload) =>
    dispatch({
      type: UiActionTypes.CLEAR_NOTIFICATION,
      payload: props,
    });

  return (
    <UiContext.Provider
      value={{
        state,
        openDrawer,
        closeDrawer,
        openModal,
        closeModal,
        openDialog,
        closeDialog,
        addNotification,
        clearNotification,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export default UiContext;
