import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import { Modal } from 'shared/Modal';
import { Button, ButtonTheme } from 'shared/Button';
import { useTranslation } from 'react-i18next';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

  const { t } = useTranslation();

  const toggleModal = useCallback(() => {
    setIsOpenAuthModal((prevState) => !prevState);
  }, []);

  return (
    <div className={classNames(cls.navBar, {}, [className])}>
      <Button
        onClick={toggleModal}
        variant={ButtonTheme.CLEAR}
      >
        {t('Войти')}
      </Button>
      <Modal
        isOpen={isOpenAuthModal}
        onClose={toggleModal}
      >
        zlzllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
      </Modal>
    </div>
  );
};
