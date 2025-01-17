import { memo } from 'react';
import cls from './NotificationsButton.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import NotificationsIcon from 'app/styles/assets/icons/notifications.svg';
import { NotificationsList } from 'entities/Notifications';
import { Popover } from 'shared/Popups';

interface NotificationsButtonProps {
  className?: string;
}

export const NotificationsButton = memo(
  ({ className }: NotificationsButtonProps) => {
    return (
      <Popover
        className={classNames('', {}, [className])}
        trigger={<NotificationsIcon className={cls.icon} />}
      >
        <NotificationsList className={cls.notifications} />
      </Popover>
    );
  }
);

NotificationsButton.displayName = 'NotificationsButton';
