import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import { Button } from 'shared/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';
import { useSelector } from 'react-redux';
import {
  getUserAuthData,
  isAdminRole,
  isManagerRole,
  userActions,
} from 'entities/User';
import { USER_LOCALE_STORAGE_KEY } from 'shared/constants/localstorage';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Dropdown } from 'shared/Dropdown/Dropdown';
import { Avatar } from 'shared/Avatar';
import { routePath } from 'app/providers/Router/lib/routeConfig/routeConfig';
import { Text } from 'shared/Text';

interface NavBarProps {
  className?: string;
}

export const NavBar = memo(({ className }: NavBarProps) => {
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isAdminRole);
  const isManager = useSelector(isManagerRole);

  const isAdminPanelAvailable = isAdmin || isManager;

  const handleCloseModal = useCallback(() => {
    setIsOpenAuthModal(false);
  }, []);

  const handleShowModal = useCallback(() => {
    setIsOpenAuthModal(true);
  }, []);

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
            href: routePath.admin_panel,
          },
        ]
      : []),
    {
      content: t('Профиль'),
      value: '2',
      href: routePath.profile + authData?.id,
    },
    {
      content: t('Выйти'),
      value: '3',
      onClick: handleLogout,
    },
  ];

  return (
    <header className={classNames(cls.navBar, {}, [className])}>
      <Text
        title="Sherry App"
        tagTitle="h1"
        size="sizeL"
        className={cls.title}
      />
      {authData && (
        <Dropdown
          trigger={
            <Avatar
              src={authData.avatar}
              size={35}
            />
          }
          options={options}
        />
      )}
      {!authData && (
        <Button
          onClick={handleShowModal}
          variant="clear"
        >
          {t('Войти')}
        </Button>
      )}
      <LoginModal
        isOpen={isOpenAuthModal}
        onClose={handleCloseModal}
      />
    </header>
  );
});

NavBar.displayName = 'NavBar';
