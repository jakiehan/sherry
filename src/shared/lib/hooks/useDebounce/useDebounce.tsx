import { useCallback, useRef } from 'react';

/**
 * Хук отсрочит выполнение переданной ей функции callback до момента, когда пройдет заданное число миллисекунд delay с момента её последнего вызова
 * @param callback
 * @param delay задержка в мс
 */

export const useDebounce = (
  callback: (...args: any[]) => void,
  delay: number
) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  return useCallback(
    (...args: any[]) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
};
