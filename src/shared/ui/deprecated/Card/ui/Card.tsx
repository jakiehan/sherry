import { FC, HTMLAttributes, memo, ReactNode } from 'react';
import cls from './Card.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

type CardTheme = 'primary' | 'outlined';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  theme?: CardTheme;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Card: FC<CardProps> = ({
  className,
  children,
  theme = 'primary',
  ...otherProps
}) => {
  return (
    <div
      className={classNames(cls.card, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  );
};
