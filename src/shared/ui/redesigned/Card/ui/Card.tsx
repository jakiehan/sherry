import { FC, HTMLAttributes, ReactNode } from 'react';
import cls from './Card.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

type CardVariant = 'primary' | 'outlined' | 'light';
type CardPadding = '0' | '8' | '16' | '24';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
  padding?: CardPadding;
}

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'padding0',
  '8': 'padding8',
  '16': 'padding16',
  '24': 'padding24',
};

export const Card: FC<CardProps> = ({
  className,
  children,
  variant = 'primary',
  padding = '8',
  ...otherProps
}) => {
  const clsPadding = mapPaddingToClass[padding];

  return (
    <article
      className={classNames(cls.card, {}, [
        className,
        cls[variant],
        cls[clsPadding],
      ])}
      {...otherProps}
    >
      {children}
    </article>
  );
};
