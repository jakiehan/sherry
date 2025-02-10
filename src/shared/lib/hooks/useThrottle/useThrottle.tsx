import { useCallback, useEffect, useRef } from 'react';

/**
 * Хук, который вызывает другую функцию callback, «пропуская» некоторые вызовы с определённой периодичностью delay.
 * @param callback
 * @param delay - задержка в мс
 */

export const useThrottle = (
  callback: (...args: any[]) => void,
  delay: number
) => {
  const throttleRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return useCallback(
    (...args: any[]) => {
      if (!throttleRef.current) {
        callback(...args);
        throttleRef.current = true;

        timerRef.current = setTimeout(() => {
          throttleRef.current = false;
        }, delay);
      }
    },
    [callback, delay]
  );
};
