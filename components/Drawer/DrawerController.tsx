import React, { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { DrawerType } from 'types';

import UiContext from 'context/UiContext';

const GenericDrawer = dynamic(() => import('components/Drawer/GenericDrawer'), { ssr: false });

import Drawer from 'components/Drawer';

const DrawerController: React.FC = () => {
  const router = useRouter();

  const { state, closeDrawer } = useContext(UiContext);

  // Close drawer if route changes
  useEffect(() => {
    const handleRouteChange = () => {
      if (state.drawer?.isOpen) {
        closeDrawer();
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [state.drawer?.isOpen]);

  return (
    <Drawer isOpen={state.drawer?.isOpen} onClose={() => closeDrawer()}>
      <>{state.drawer?.type === DrawerType.GENERIC_DRAWER && <GenericDrawer />}</>
    </Drawer>
  );
};

export default DrawerController;
