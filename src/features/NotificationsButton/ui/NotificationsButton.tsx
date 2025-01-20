import { memo, useCallback, useState } from 'react';
import cls from './NotificationsButton.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import NotificationsIcon from 'app/styles/assets/icons/notifications.svg';
import { NotificationsList } from 'entities/Notifications';
import { Popover } from 'shared/Popups';
import { useDevice } from 'shared/lib/hooks/useDevice/useDevice';
import { Drawer } from 'shared/Drawer';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider';

interface NotificationsButtonProps {
  className?: string;
}

export const NotificationsButton = memo(
  ({ className }: NotificationsButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = useCallback(() => {
      setIsOpen(!isOpen);
    }, [isOpen]);

    const trigger = (
      <NotificationsIcon
        className={cls.icon}
        onClick={toggleDrawer}
      />
    );
    const isMobile = useDevice();

    return (
      <>
        {!isMobile && (
          <Popover
            className={classNames('', {}, [className])}
            trigger={trigger}
          >
            <NotificationsList className={cls.notifications} />
          </Popover>
        )}
        {isMobile && (
          <>
            {trigger}
            <Drawer
              isOpen={isOpen}
              onClose={toggleDrawer}
              lazy
            >
              <NotificationsList />
            </Drawer>
          </>
        )}
      </>
    );
  }
);

NotificationsButton.displayName = 'NotificationsButton';
