import { useState, useEffect, useCallback } from 'react';
import getCurrentPosition from 'utilities/getCurrentPosition';

type ReturnType = {
  notSupported: boolean;
  isLocating: boolean;
  isError: boolean;
  getPosition: () => Promise<GeolocationPosition | null>;
};

function useGetPosition(): ReturnType {
  const [notSupported, setNotSupported] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      setNotSupported(true);
      return;
    }
  }, []);

  const getPosition = useCallback(async () => {
    setIsLocating(true);

    try {
      const position = await getCurrentPosition();
      setIsError(false);
      setIsLocating(false);
      return position;
    } catch (error) {
      setIsError(true);
      setIsLocating(false);
      return null;
    }
  }, []);

  return { notSupported, isError, isLocating, getPosition };
}

export default useGetPosition;
