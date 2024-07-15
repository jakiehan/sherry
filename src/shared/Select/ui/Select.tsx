import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export interface SelectOptions {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options: SelectOptions[];
  value?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export const Select = memo(
  ({ className, label, options, onChange, value, readOnly }: SelectProps) => {
    const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
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

Select.displayName = 'Select';
