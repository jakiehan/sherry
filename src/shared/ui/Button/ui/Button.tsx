import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

type ButtonVariant =
  | 'clear'
  | 'outline'
  | 'outlineRed'
  | 'background'
  | 'backgroundInverted';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  size?: 'sizeM' | 'sizeL' | 'sizeXL';
  square?: boolean;
  children?: ReactNode;
  fullWidth?: boolean;
}

// Использовать memo когда есть prop children не совсем правильно и не имеет смысла
// (НО тут в 99% в children будет просто строка, поэтому использование memo оправдано)
export const Button = memo(
  ({
    className,
    children,
    variant = 'outline',
    size = 'sizeM',
    square = false,
    fullWidth,
    ...otherProps
  }: ButtonProps) => {
    const mods: Mods = {
      [cls.square]: square,
      [cls.fullWidth]: fullWidth,
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
