import { FC, useCallback, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import { Button, ButtonTheme } from 'shared/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

  const authData = useSelector(getUserAuthData);

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleCloseModal = useCallback(() => {
    setIsOpenAuthModal(false);
  }, []);

  const handleShowModal = useCallback(() => {
    setIsOpenAuthModal(true);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  useEffect(() => {
    if (authData) {
      handleCloseModal();
    }
  }, [authData, handleCloseModal]);

  return (
    <div className={classNames(cls.navBar, {}, [className])}>
      {authData && (
        <Button
          onClick={handleLogout}
          variant={ButtonTheme.CLEAR}
        >
          {t('Выйти')}
        </Button>
      )}
      {!authData && (
        <Button
          onClick={handleShowModal}
          variant={ButtonTheme.CLEAR}
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
};
