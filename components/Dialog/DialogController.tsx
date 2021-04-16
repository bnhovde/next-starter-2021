import React, { useContext } from 'react';
import dynamic from 'next/dynamic';

import { DialogType } from 'types';

import UiContext from 'context/UiContext';

const Generic = dynamic(() => import('components/Dialog/Generic'), {
  ssr: false,
});

import Dialog from 'components/Dialog';

const DialogController: React.FC = () => {
  const { state: uiState, closeDialog } = useContext(UiContext);

  const handleConfirm = () => {
    if (uiState.dialog.onConfirm) {
      uiState.dialog?.onConfirm();
    }
    if (uiState.dialog.closeOnConfirm) {
      closeDialog();
    }
  };

  if (uiState.dialog.type) {
    return <>{uiState.dialog?.type === DialogType.GENERIC_DIALOG && <Generic />}</>;
  }

  return (
    <Dialog
      isOpen={uiState.dialog?.isOpen}
      title={uiState.dialog.title || ''}
      message={uiState.dialog.text || ''}
      onConfirm={() => handleConfirm()}
      onClose={() => closeDialog()}
    />
  );
};

export default DialogController;
