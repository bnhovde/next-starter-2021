import { useEffect } from 'react';
import type { AppProps } from 'next/app';

import { outlineWatcher } from 'utilities/a11y';
import { loaded } from 'utilities/bodyLoader';
import { UiProvider } from 'context/UiContext';

// Important: This has to be imported before any other css
import '../styles/index.css';

import Meta from 'components/Meta';
import Main from 'components/Main';
import Header from 'components/Header';

import { DrawerController } from 'components/Drawer';
import { DialogController } from 'components/Dialog';
import { ModalController } from 'components/Modal';
import { NotificationsController } from 'components/Notifications';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    loaded();
    outlineWatcher();
  }, []);

  return (
    <UiProvider>
      <div id="app">
        <Meta />
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
      </div>
      <div id="app-overlays">
        <DrawerController />
        <ModalController />
        <DialogController />
        <NotificationsController />
      </div>
      <div id="app-portal"></div>
    </UiProvider>
  );
}

export default MyApp;
