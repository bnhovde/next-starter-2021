import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: JSX.Element[] | JSX.Element | string;
};

const Portal: React.FC<Props> = ({ children }) => {
  const ref = useRef() as React.MutableRefObject<HTMLElement>;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const portalEl = document.getElementById('app-portal');
    if (portalEl) {
      ref.current = portalEl;
    }
    setMounted(true);
  }, []);

  return mounted ? createPortal(children, ref.current) : null;
};

export default Portal;
