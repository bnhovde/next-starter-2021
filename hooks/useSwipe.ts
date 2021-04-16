import { useCallback, useState, TouchEvent } from 'react';
import throttle from 'utilities/throttle';

type Args = {
  direction?: 'vertical' | 'horizontal';
  minValue?: number;
  maxValue?: number;
  minDistance?: number;
  onTrigger?: (direction: number) => void;
};

type ReturnType = {
  onTouchStart: (event: TouchEvent<HTMLElement>) => void;
  onTouchMove: (event: TouchEvent<HTMLElement>) => void;
  onTouchEnd: (event: TouchEvent<HTMLElement>) => void;
  isSwiping: boolean;
  distance: number;
};

const useSwipe = ({
  direction = 'vertical',
  minValue = 0,
  maxValue = 1000,
  minDistance = 100,
  onTrigger,
}: Args): ReturnType => {
  const [isSwiping, setIsSwiping] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentPos, setCurrentPos] = useState(0);

  const distance = Math.max(minValue, Math.min(currentPos - startPos, maxValue));
  const valueToUse = direction === 'vertical' ? 'clientY' : 'clientX';

  const throttledSetPosition = useCallback(
    throttle((value: number) => {
      setCurrentPos(value);
      return;
    }, 10),
    []
  );

  const onTouchStart = useCallback((event: TouchEvent<HTMLElement>) => {
    event.preventDefault();
    const firstTouch = event.touches[0];
    setStartPos(firstTouch[valueToUse]);
    setCurrentPos(firstTouch[valueToUse]);
    setIsSwiping(true);
  }, []);

  const onTouchMove = useCallback((event: TouchEvent<HTMLElement>) => {
    event.preventDefault();
    const touch = event.changedTouches[0];
    throttledSetPosition(touch[valueToUse]);
  }, []);

  const onTouchEnd = useCallback(
    (event: TouchEvent<HTMLElement>) => {
      const lastTouch = event.changedTouches[0];
      const distance = lastTouch[valueToUse] - startPos;

      if (Math.abs(distance) > minDistance) {
        if (onTrigger) {
          onTrigger(distance);
        }
      }

      setIsSwiping(false);
      setStartPos(0);
      setCurrentPos(0);
    },
    [startPos, onTrigger, minDistance]
  );

  return { onTouchStart, onTouchMove, onTouchEnd, isSwiping, distance };
};

export default useSwipe;
