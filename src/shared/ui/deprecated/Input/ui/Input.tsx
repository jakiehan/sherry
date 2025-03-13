import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

// Omit - берем все пропсы за исключением value и onchange
type HtmlInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HtmlInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  label?: string;
  variant?: 'outlined' | 'primary';
  readOnly?: boolean;
  labelWidth?: number | string;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Input = memo(
  ({
    className,
    value = '',
    onChange,
    variant = 'primary',
    label = '',
    readOnly,
    labelWidth,
    ...otherProps
  }: InputProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <label className={classNames(cls.inputWrapper, {}, [className])}>
        {label?.length !== 0 && (
          <span
            style={{ width: labelWidth }}
            className={cls.label}
          >
            {label}
          </span>
        )}
        <input
          className={classNames(cls.input, {}, [cls[variant]])}
          value={value}
          onChange={handleChange}
          readOnly={readOnly}
          {...otherProps}
        />
      </label>
    );
  }
);

Input.displayName = 'Input';
