import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonVariant {
  CLEAR = 'clear', // чистая кнопка без отступов/бордеров и т.д.
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  ...otherProps
}) => (
  <button
    type="button"
    className={classNames(cls.button, {}, [className, cls[variant]])}
    {...otherProps}
  >
    {children}
  </button>
);
