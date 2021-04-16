import { ModalType, DrawerType, DialogType, NotificationType } from 'types';

export type DrawerState = {
  isOpen: boolean;
  type?: DrawerType;
};

export type DialogState = {
  isOpen: boolean;
  type?: DialogType;
  title?: string;
  text?: string;
  closeOnConfirm?: boolean;
  onConfirm?: () => void;
};

export type ModalState = {
  isOpen: boolean;
  type?: ModalType;
};

export type Notification = {
  id: string;
  title: string;
  text: string;
  type?: NotificationType;
  isAlert?: boolean;
  autoClear?: boolean;
  autoClearQuick?: boolean;
  timeoutFunc?: number;
};

export type UiState = {
  touched: boolean;
  drawer?: DrawerState;
  modal?: ModalState;
  notifications: Notification[];
  dialog: DialogState;
};
