import { memo } from 'react';
import cls from './Overlay.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay = memo(({ className, onClick }: OverlayProps) => {
  return (
    <div
      className={classNames(cls.overlay, {}, [className])}
      onClick={onClick}
    />
  );
});

Overlay.displayName = 'Overlay';
