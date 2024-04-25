import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear', // чистая кнопка без отступов/бордеров и т.д.
  OUTLINE = 'outline', // с рамкой
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'sizeM',
  L = 'sizeL',
  XL = 'sizeXL',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonTheme;
  size?: ButtonSize;
  square?: boolean;
  children?: ReactNode;
}

// Использовать memo когда есть prop children не совсем правильно и не имеет смысла
// (НО тут в 99% в children будет просто строка, поэтому использование memo оправдано)
export const Button = memo(
  ({
    className,
    children,
    variant,
    size = ButtonSize.M,
    square,
    ...otherProps
  }: ButtonProps) => {
    const mods: Record<string, boolean> = {
      [cls.square]: square,
    };

    return (
      <button
        type="button"
        className={classNames(cls.button, mods, [
          className,
          cls[variant],
          cls[size],
        ])}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
