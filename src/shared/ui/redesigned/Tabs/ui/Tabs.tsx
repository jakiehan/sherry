import { memo, ReactNode } from 'react';
import cls from './Tabs.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '../../Card';
import { FlexDirection } from '../../Flex/ui/Flex/Flex';

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];
  value: T;
  onTabClick?: (value: T) => void;
  direction?: FlexDirection;
}

// обертка, чтобы сохранить memo
const genericMemo: <T>(component: T) => T = memo;

export const Tabs = genericMemo(
  <T extends string>({
    className,
    tabs,
    onTabClick,
    value,
    direction = 'column',
  }: TabsProps<T>) => {
    return (
      <ul className={classNames(cls.tabs, {}, [className, cls[direction]])}>
        {tabs.map((tab) => (
          <li key={tab.value}>
            <Card
              className={cls.tab}
              variant={tab.value === value ? 'light' : 'primary'}
              onClick={() => onTabClick?.(tab.value)}
              padding="8"
            >
              {tab.content}
            </Card>
          </li>
        ))}
      </ul>
    );
  }
);
