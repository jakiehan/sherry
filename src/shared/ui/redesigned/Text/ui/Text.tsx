import { memo } from 'react';
import cls from './Text.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: 'primary' | 'error' | 'accent';
  align?: 'left' | 'center' | 'right';
  size?: 'sizeM' | 'sizeL';
  tagTitle?: keyof HTMLElementTagNameMap;
  'data-testid'?: string;
  max?: boolean;
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
    max,
  }: TextProps) => {
    const Tag = tagTitle;

    const additionalClasses = [className, cls[variant], cls[align], cls[size]];

    return (
      <div
        className={classNames(
          cls.textContainer,
          { [cls.maxWidth]: max },
          additionalClasses
        )}
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
