import { Fragment, memo, ReactNode } from 'react';
import cls from './Dropdown.module.scss';
import clsPopups from '../../Popups.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Menu } from '@headlessui/react';
import { Directions } from '@/shared/types/ui';
import { AppLink } from '../../../../AppLink';

interface DropdownOption {
  value?: string;
  content?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  trigger: ReactNode;
  options: DropdownOption[];
  direction?: Directions;
}

export const Dropdown = memo(
  ({
    className,
    trigger,
    options,
    direction = 'bottomLeft',
  }: DropdownProps) => {
    return (
      <Menu
        as="div"
        className={classNames(cls.dropdown, {}, [
          className,
          clsPopups.position,
        ])}
      >
        <Menu.Button
          as="div"
          className={clsPopups.trigger}
        >
          {trigger}
        </Menu.Button>
        <Menu.Items className={classNames(cls.menu, {}, [cls[direction]])}>
          {options.map((option) => {
            const content = ({ active }: { active: boolean }) => (
              <li
                className={classNames(clsPopups.option, {
                  [clsPopups.activeOption]: active,
                })}
              >
                <button
                  className={clsPopups.trigger}
                  onClick={option.onClick}
                  type="button"
                  disabled={option.disabled}
                >
                  {option.content}
                </button>
              </li>
            );

            if (option.href) {
              return (
                <Menu.Item
                  as={AppLink}
                  to={option.href}
                  key={option.value}
                  disabled={option.disabled}
                  refName="href"
                >
                  {content}
                </Menu.Item>
              );
            }

            return (
              <Menu.Item
                as={Fragment}
                key={option.value}
                disabled={option.disabled}
              >
                {content}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Menu>
    );
  }
);

Dropdown.displayName = 'Dropdown';
