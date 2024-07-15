import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import { Button } from 'shared/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { USER_LOCALE_STORAGE_KEY } from 'shared/constants/localstorage';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface NavBarProps {
  className?: string;
}

export const NavBar = memo(({ className }: NavBarProps) => {
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

  const authData = useSelector(getUserAuthData);

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

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

  return (
    <div className={classNames(cls.navBar, {}, [className])}>
      {authData && (
        <Button
          onClick={handleLogout}
          variant="clear"
        >
          {t('Выйти')}
        </Button>
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
    </div>
  );
});

NavBar.displayName = 'NavBar';
