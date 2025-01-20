import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface SelectOptions<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options: SelectOptions<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readOnly?: boolean;
}
// обертка, чтобы сохранить memo
const genericMemo: <T>(component: T) => T = memo;

export const Select = genericMemo(
  <T extends string>({
    className,
    label,
    options,
    onChange,
    value,
    readOnly,
  }: SelectProps<T>) => {
    const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value as T);
    };

    const optionsList = useMemo(() => {
      return options.map((option) => (
        <option
          className={cls.option}
          key={option.value}
          value={option.value}
        >
          {option.content}
        </option>
      ));
    }, [options]);

    return (
      <label className={classNames(cls.selectWrapper, {}, [className])}>
        {label && <span>{label}</span>}
        <select
          value={value}
          onChange={changeHandler}
          className={cls.select}
          disabled={readOnly}
        >
          {optionsList}
        </select>
      </label>
    );
  }
);
