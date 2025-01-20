import { memo, ReactNode } from 'react';
import cls from './Popover.module.scss';
import clsPopups from '../../Popups.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Popover as HPopover } from '@headlessui/react';
import { Directions } from '@/shared/types/ui';

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  children: ReactNode;
  direction?: Directions;
}

export const Popover = memo(
  ({
    className,
    trigger,
    direction = 'bottomLeft',
    children,
  }: PopoverProps) => {
    return (
      <HPopover className={classNames('', {}, [className, clsPopups.position])}>
        <HPopover.Button className={clsPopups.trigger}>
          {trigger}
        </HPopover.Button>
        <HPopover.Panel className={classNames(cls.panel, {}, [cls[direction]])}>
          {children}
        </HPopover.Panel>
      </HPopover>
    );
  }
);

Popover.displayName = 'Popover';
