import { memo } from 'react';
import cls from './NotificationsItem.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Notifications } from '../../model/types/notifications';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

interface NotificationsItemProps {
  item: Notifications;
  className?: string;
}

export const NotificationsItem = memo(
  ({ className, item }: NotificationsItemProps) => {
    const content = (
      <ToggleFeatures
        name="isAppRedesigned"
        on={
          <Card className={classNames(cls.notificationsItem, {}, [className])}>
            <Text
              title={item.title}
              text={item.description}
            />
          </Card>
        }
        off={
          <CardDeprecated
            theme="outlined"
            className={classNames(cls.notificationsItem, {}, [className])}
          >
            <TextDeprecated
              title={item.title}
              text={item.description}
            />
          </CardDeprecated>
        }
      />
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
