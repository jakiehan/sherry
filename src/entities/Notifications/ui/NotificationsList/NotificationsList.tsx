import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useGetNotificationsQuery } from '../../api/notificationsApi';
import { VStack } from '@/shared/ui/redesigned/Flex';
import { NotificationsItem } from '../NotificationsItem/NotificationsItem';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { useToggleFeatures } from '@/shared/lib/hooks/useToggleFeatures/useToggleFeatures';

interface NotificationsListProps {
  className?: string;
}

export const NotificationsList = memo(
  ({ className }: NotificationsListProps) => {
    const { data: notifications, isLoading } = useGetNotificationsQuery(null, {
      pollingInterval: 10000,
    });

    const Skeleton = useToggleFeatures({
      name: 'isAppRedesigned',
      on: () => SkeletonRedesigned,
      off: () => SkeletonDeprecated,
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
