import {
  FC,
  MutableRefObject,
  ReactNode,
  useRef,
  UIEvent,
  useLayoutEffect,
} from 'react';
import cls from './Page.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfinityScroll } from '@/shared/lib/hooks/useInfinityScroll/useInfinityScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getScrollByPath, saveScrollActions } from '@/features/ScrollSave';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';

interface PageProps {
  children: ReactNode;
  onScrollEnd?: () => void;
  className?: string;
  isSaveScrollPosition?: boolean;
}

export const Page: FC<PageProps> = ({
  className,
  children,
  onScrollEnd,
  isSaveScrollPosition = false,
}) => {
  const wrapperRef = useRef(null) as MutableRefObject<HTMLElement | null>;
  const triggerRef = useRef(null) as MutableRefObject<HTMLDivElement | null>;

  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollByPath(state, pathname)
  );

  useInfinityScroll({
    callback: onScrollEnd,
    triggerRef,
    wrapperRef,
  });

  useLayoutEffect(() => {
    if (isSaveScrollPosition && wrapperRef.current) {
      wrapperRef.current.scrollTop = scrollPosition;
    }
  }, [isSaveScrollPosition, scrollPosition]);

  const handleScroll = useThrottle((e: UIEvent<HTMLElement>) => {
    if (isSaveScrollPosition) {
      dispatch(
        saveScrollActions.setScrollPosition({
          path: pathname,
          position: e.currentTarget.scrollTop,
        })
      );
    }
  }, 500);

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.page, {}, [className])}
      onScroll={handleScroll}
    >
      {children}
      {onScrollEnd && (
        <div
          ref={triggerRef}
          className={cls.trigger}
        />
      )}
    </section>
  );
};
