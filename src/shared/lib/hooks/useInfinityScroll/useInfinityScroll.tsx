import { MutableRefObject, useEffect } from 'react';

interface UseInfinityScrollProps {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement | null>;
  wrapperRef: MutableRefObject<HTMLElement | null>;
}

export const useInfinityScroll = ({
  callback,
  triggerRef,
  wrapperRef,
}: UseInfinityScrollProps) => {
  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;
    let observer: IntersectionObserver | null = null;

    if (callback && wrapperElement && triggerElement) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerElement);

      return () => {
        if (observer && triggerElement) {
          observer.unobserve(triggerElement);
        }
      };
    }
  }, [callback, triggerRef, wrapperRef]);
};
