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
import { TestProps } from '@/shared/types/testing';
import { useToggleFeatures } from '@/shared/lib/hooks/useToggleFeatures/useToggleFeatures';

interface PageProps extends TestProps {
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
  'data-testid': dataTestId,
}) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollByPath(state, pathname)
  );

  const wrapper = useToggleFeatures({
    name: 'isAppRedesigned',
    on: () => undefined,
    off: () => wrapperRef,
  });

  useInfinityScroll({
    callback: onScrollEnd,
    triggerRef,
    wrapperRef: wrapper,
  });

  const pageFeatureClass = useToggleFeatures({
    name: 'isAppRedesigned',
    on: () => cls.pageRedesigned,
    off: () => cls.page,
  });

  useLayoutEffect(() => {
    if (isSaveScrollPosition) {
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
      className={classNames(pageFeatureClass, {}, [className])}
      onScroll={handleScroll}
      data-testid={dataTestId ?? 'page'}
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
