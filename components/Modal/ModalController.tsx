import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import { ModalType } from 'types';
import UiContext from 'context/UiContext';

const GenericModal = dynamic(() => import('components/Modal/GenericModal'), { ssr: false });

import Modal from 'components/Modal';

const modalDescriptions = {
  [ModalType.GENERIC_MODAL]: {
    label: 'Generic Modal title',
    description: 'Generic Modal description',
  },
};

const ModalController: React.FC = () => {
  const router = useRouter();
  const { state, closeModal } = useContext(UiContext);

  // Close modal if route changes
  useEffect(() => {
    const handleRouteChange = () => {
      if (state.modal?.isOpen) {
        closeModal();
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [state.modal?.isOpen]);

  const ariaLabels = state.modal?.type && modalDescriptions[state.modal.type];

  return (
    <Modal
      name={state.modal?.type || 'modal'}
      label={ariaLabels?.label}
      description={ariaLabels?.description}
      isOpen={state.modal?.isOpen}
      isPaused={state.dialog?.isOpen}
      onClose={() => closeModal()}
    >
      <>{state.modal?.type === ModalType.GENERIC_MODAL && <GenericModal />}</>
    </Modal>
  );
};

export default ModalController;
