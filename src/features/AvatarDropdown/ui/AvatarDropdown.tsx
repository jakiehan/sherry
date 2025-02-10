import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import {
  getUserAuthData,
  isAdminRole,
  isManagerRole,
  userActions,
} from '@/entities/User';
import { USER_LOCALE_STORAGE_KEY } from '@/shared/constants/localstorage';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  getRouteAdmin,
  getRouteProfile,
} from '@/app/providers/Router/constants/router';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isAdminRole);
  const isManager = useSelector(isManagerRole);

  const isAdminPanelAvailable = isAdmin || isManager;

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
    localStorage.removeItem(USER_LOCALE_STORAGE_KEY);
  }, [dispatch]);

  const options = [
    ...(isAdminPanelAvailable
      ? [
          {
            content: t('Админ панель'),
            value: '1',
            href: getRouteAdmin(),
          },
        ]
      : []),
    {
      content: t('Профиль'),
      value: '2',
      href: getRouteProfile(authData?.id ?? ''),
    },
    {
      content: t('Выйти'),
      value: '3',
      onClick: handleLogout,
    },
  ];

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      trigger={
        <Avatar
          src={authData?.avatar}
          size={35}
        />
      }
      options={options}
    />
  );
});

AvatarDropdown.displayName = 'AvatarDropdown';
