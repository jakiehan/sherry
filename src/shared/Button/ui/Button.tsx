import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';

export enum ButtonVariant {
  CLEAR = 'clear', // чистая кнопка без отступов/бордеров и т.д.
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = ({ className, children, variant, ...otherProps }) => {
  return (
    <button
      className={classNames(cls.button, {}, [className, cls[variant]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};