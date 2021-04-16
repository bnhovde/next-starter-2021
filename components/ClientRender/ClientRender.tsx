import React, { useState, useEffect } from 'react';

type Props = {
  children: JSX.Element;
};

const ClientRender: React.FC<Props> = ({ children }) => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return isMounted ? children : null;
};

export default ClientRender;
