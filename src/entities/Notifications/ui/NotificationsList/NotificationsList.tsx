import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useGetNotificationsQuery } from '../../api/notificationsApi';
import { VStack } from 'shared/Flex';
import { NotificationsItem } from '../NotificationsItem/NotificationsItem';
import { Skeleton } from 'shared/Skeleton/ui/Skeleton';

interface NotificationsListProps {
  className?: string;
}

export const NotificationsList = memo(
  ({ className }: NotificationsListProps) => {
    const { data: notifications, isLoading } = useGetNotificationsQuery(null, {
      pollingInterval: 10000,
    });

    if (isLoading) {
      return (
        <div className={classNames('', {}, [className])}>
          <VStack
            gap="16"
            max
          >
            <Skeleton
              height={70}
              borderRadius={8}
            />
            <Skeleton
              height={70}
              borderRadius={8}
            />
            <Skeleton
              height={70}
              borderRadius={8}
            />
          </VStack>
        </div>
      );
    }

    return (
      <div className={classNames('', {}, [className])}>
        <VStack
          gap="16"
          max
        >
          {notifications?.map((notification) => (
            <NotificationsItem
              key={notification.id}
              item={notification}
            />
          ))}
        </VStack>
      </div>
    );
  }
);

NotificationsList.displayName = 'NotificationsList';
