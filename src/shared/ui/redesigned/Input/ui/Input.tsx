import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  ReactNode,
  useState,
} from 'react';
import cls from './Input.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../../Flex';
import { Text } from '../../Text';

// Omit - берем все пропсы за исключением value и onchange и readOnly
type HtmlInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HtmlInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  readOnly?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  autoFocus?: boolean;
}

export const Input = memo(
  ({
    className,
    value = '',
    onChange,
    placeholder = '',
    label = '',
    readOnly,
    addonLeft,
    addonRight,
    autoFocus = false,
    ...otherProps
  }: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleBlur = () => {
      setIsFocused(false);
    };

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    const mods = {
      [cls.addonLeftPadding]: Boolean(addonLeft),
      [cls.addonRightPadding]: Boolean(addonRight),
      [cls.focused]: isFocused,
    };

    const input = (
      <label className={classNames(cls.inputWrapper, mods, [className])}>
        {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
        <input
          className={cls.input}
          autoFocus={autoFocus}
          value={value}
          onChange={handleChange}
          readOnly={readOnly}
          placeholder={placeholder}
          onBlur={handleBlur}
          onFocus={handleFocus}
          {...otherProps}
        />
        {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
      </label>
    );

    if (label?.length) {
      return (
        <HStack
          max
          gap="8"
        >
          <Text
            text={label}
            max
          />
          {input}
        </HStack>
      );
    }

    return input;
  }
);

Input.displayName = 'Input';
