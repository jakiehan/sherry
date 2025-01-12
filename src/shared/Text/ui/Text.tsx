import { memo } from 'react';
import cls from './Text.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: 'primary' | 'error';
  align?: 'left' | 'center' | 'right';
  size?: 'sizeM' | 'sizeL';
}

export const Text = memo(
  ({
    className,
    text,
    title,
    variant = 'primary',
    align = 'left',
    size = 'sizeM',
  }: TextProps) => {
    return (
      <div
        className={classNames(cls.textContainer, {}, [
          className,
          cls[variant],
          cls[align],
          cls[size],
        ])}
      >
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
      </div>
    );
  }
);

Text.displayName = 'Text';
