import { memo } from 'react';
import cls from './ScrollToolbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ScrollToTopButton } from '@/features/ScrollToTopButton';
import { VStack } from '@/shared/ui/redesigned/Flex';
import { useGetScrollPosition } from '@/shared/lib/hooks/useGetScrollPosition/useGetScrollPosition';

interface ScrollToolbarProps {
  className?: string;
}

export const ScrollToolbar = memo(({ className }: ScrollToolbarProps) => {
  const { y } = useGetScrollPosition();

  const isShowButton = y !== 0;

  return (
    <VStack
      justify="center"
      align="center"
      className={classNames(cls.scrollToolbar, {}, [className])}
    >
      {isShowButton && <ScrollToTopButton />}
    </VStack>
  );
});

ScrollToolbar.displayName = 'ScrollToolbar';
