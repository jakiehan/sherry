import { memo } from 'react';
import cls from './NotificationsItem.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Notifications } from '../../model/types/notifications';
import { Card } from '@/shared/Card';
import { Text } from '@/shared/Text';

interface NotificationsItemProps {
  item: Notifications;
  className?: string;
}

export const NotificationsItem = memo(
  ({ className, item }: NotificationsItemProps) => {
    const content = (
      <Card
        theme="outlined"
        className={classNames(cls.notificationsItem, {}, [className])}
      >
        <Text
          title={item.title}
          text={item.description}
        />
      </Card>
    );

    if (item.href) {
      return (
        <a
          className={cls.notificationsLinkItem}
          target="_blank"
          href={item.href}
          rel="noreferrer"
        >
          {content}
        </a>
      );
    }

    return content;
  }
);

NotificationsItem.displayName = 'NotificationsItem';
