import { CSSProperties, memo } from 'react';
import cls from './Skeleton.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface SkeletonProps {
  className?: string;
  height?: number | string;
  width?: number | string;
  borderRadius?: number | string;
}

export const Skeleton = memo(
  ({ className, width, height, borderRadius }: SkeletonProps) => {
    const style: CSSProperties = {
      maxWidth: width,
      width: '100%',
      height,
      borderRadius,
    };

    return (
      <div
        className={classNames(cls.skeleton, {}, [className])}
        style={style}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';
