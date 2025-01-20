import { memo } from 'react';
import cls from './Text.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: 'primary' | 'error';
  align?: 'left' | 'center' | 'right';
  size?: 'sizeM' | 'sizeL';
  tagTitle?: keyof HTMLElementTagNameMap;
  'data-testid'?: string;
}

export const Text = memo(
  ({
    className,
    text,
    title,
    variant = 'primary',
    align = 'left',
    size = 'sizeM',
    tagTitle = 'p',
    'data-testid': dataTestId = 'Text',
  }: TextProps) => {
    const Tag = tagTitle;

    return (
      <div
        className={classNames(cls.textContainer, {}, [
          className,
          cls[variant],
          cls[align],
          cls[size],
        ])}
      >
        {title && (
          <Tag
            className={cls.title}
            data-testid={`${dataTestId}.Header`}
          >
            {title}
          </Tag>
        )}
        {text && (
          <p
            className={cls.text}
            data-testid={`${dataTestId}.Paragraph`}
          >
            {text}
          </p>
        )}
      </div>
    );
  }
);

Text.displayName = 'Text';
