import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

// Omit - берем все пропсы за исключением value и onchange
type HtmlInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HtmlInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
}

export const Input = memo(
  ({
    className,
    value = '',
    onChange,
    label = '',
    ...otherProps
  }: InputProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <label className={classNames(cls.inputWrapper, {}, [className])}>
        <span>{label}</span>
        <input
          className={cls.input}
          value={value}
          onChange={handleChange}
          {...otherProps}
        />
      </label>
    );
  }
);

Input.displayName = 'Input';
