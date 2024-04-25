import { memo } from 'react';
import cls from './Text.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextTheme;
}

export const Text = memo(
  ({ className, text, title, variant = TextTheme.PRIMARY }: TextProps) => {
    return (
      <div
        className={classNames(cls.textContainer, {}, [className, cls[variant]])}
      >
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
      </div>
    );
  }
);

Text.displayName = 'Text';
