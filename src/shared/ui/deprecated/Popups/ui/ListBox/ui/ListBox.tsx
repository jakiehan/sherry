import { Fragment, memo, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cls from './ListBox.module.scss';
import clsPopups from '../../Popups.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '../../../../Button';
import ArrowIcon from '@/shared/assets/icons/arrow-down.svg';
import { Directions } from '@/shared/types/ui';

interface ListBoxOption<T extends string> {
  value: T;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps<T extends string> {
  className?: string;
  classNameLabel?: string;
  value?: T;
  defaultValue?: T;
  options?: ListBoxOption<T>[];
  onChange?: (value: T) => void;
  readOnly?: boolean;
  label?: string;
  direction?: Directions;
}

const genericMemo: <T>(component: T) => T = memo;
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const ListBox = genericMemo(
  <T extends string>({
    options,
    className,
    classNameLabel,
    defaultValue,
    value,
    onChange,
    readOnly,
    label,
    direction = 'bottom',
  }: ListBoxProps<T>) => {
    return (
      <label className={cls.wrapper}>
        {label?.length !== 0 && (
          <span className={classNames('', {}, [classNameLabel])}>{label}</span>
        )}
        <HListBox
          value={value}
          onChange={onChange}
          as="div"
          className={classNames('', { [cls.disabled]: readOnly }, [
            className,
            clsPopups.position,
          ])}
          disabled={readOnly}
        >
          {({ open }) => (
            <>
              <HListBox.Button as="div">
                <Button
                  className={cls.btn}
                  disabled={readOnly}
                >
                  {value ?? defaultValue}{' '}
                  <ArrowIcon
                    className={classNames(cls.icon, { [cls.open]: open })}
                  />
                </Button>
              </HListBox.Button>
              <HListBox.Options
                className={classNames(cls.options, {}, [cls[direction]])}
              >
                {options?.map((option) => (
                  <HListBox.Option
                    key={option.value}
                    value={option.content}
                    disabled={option.disabled}
                    as={Fragment}
                  >
                    {({ active, selected }) => (
                      <li
                        className={classNames(
                          clsPopups.option,
                          {
                            [clsPopups.activeOption]: active,
                            [cls.selectedOption]: selected,
                            [cls.disabledOption]: option?.disabled,
                          },
                          []
                        )}
                      >
                        {option.content}
                      </li>
                    )}
                  </HListBox.Option>
                ))}
              </HListBox.Options>
            </>
          )}
        </HListBox>
      </label>
    );
  }
);
