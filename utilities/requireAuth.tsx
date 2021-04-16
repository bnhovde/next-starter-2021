import React from 'react';
import { Auth } from 'types';

import Loader from 'components/Loader';

const requireAuth = (AuthComp: React.ReactElement, UnauthComp: React.ReactElement) => (
  auth: Auth
): React.ReactElement => {
  if (auth.loading) {
    return <Loader />;
  }

  return auth.isAuthenticated ? AuthComp : UnauthComp;
};

export default requireAuth;
