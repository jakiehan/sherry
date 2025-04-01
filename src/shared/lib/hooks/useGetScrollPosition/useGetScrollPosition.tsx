import { useEffect, useState } from 'react';
import { useDebounce } from '../useDebounce/useDebounce';

export const useGetScrollPosition = () => {
  const [positions, setPositions] = useState({
    x: window.scrollX,
    y: window.scrollY,
  });

  const setScrollPosition = useDebounce(() => {
    setPositions((prevState) => ({
      ...prevState,
      x: window.scrollX,
      y: window.scrollY,
    }));
  }, 500);

  useEffect(() => {
    window.addEventListener('scroll', setScrollPosition);

    return () => window.removeEventListener('scroll', setScrollPosition);
  }, [setScrollPosition]);

  return positions;
};
