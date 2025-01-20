import { memo, ReactNode } from 'react';
import cls from './Tabs.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/Card';

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];
  value: T;
  onTabClick?: (value: T) => void;
}

// обертка, чтобы сохранить memo
const genericMemo: <T>(component: T) => T = memo;

export const Tabs = genericMemo(
  <T extends string>({ className, tabs, onTabClick, value }: TabsProps<T>) => {
    return (
      <ul className={classNames(cls.tabs, {}, [className])}>
        {tabs.map((tab) => (
          <li key={tab.value}>
            <Card
              className={cls.tab}
              theme={tab.value === value ? 'primary' : 'outlined'}
              onClick={() => onTabClick?.(tab.value)}
            >
              {tab.content}
            </Card>
          </li>
        ))}
      </ul>
    );
  }
);
