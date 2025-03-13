import { memo, useCallback, useState } from 'react';
import cls from './NotificationsButton.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import NotificationsIconDeprecated from '@/shared/assets/icons/notifications.svg';
import NotificationsIcon from '@/shared/assets/icons/notifications-v2.svg';
import { NotificationsList } from '@/entities/Notifications';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

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
      <ToggleFeatures
        name="isAppRedesigned"
        on={
          <Icon
            Svg={NotificationsIcon}
            onClick={toggleDrawer}
            clickable
          />
        }
        off={
          <NotificationsIconDeprecated
            className={cls.icon}
            onClick={toggleDrawer}
          />
        }
      />
    );
    const isMobile = useDevice();

    return (
      <>
        {!isMobile && (
          <ToggleFeatures
            name="isAppRedesigned"
            on={
              <Popover
                className={classNames('', {}, [className])}
                trigger={trigger}
              >
                <NotificationsList className={cls.notifications} />
              </Popover>
            }
            off={
              <PopoverDeprecated
                className={classNames('', {}, [className])}
                trigger={trigger}
              >
                <NotificationsList className={cls.notifications} />
              </PopoverDeprecated>
            }
          />
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
