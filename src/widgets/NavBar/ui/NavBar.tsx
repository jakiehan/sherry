import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import { Button } from 'shared/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Text } from 'shared/Text';
import { HStack } from 'shared/Flex';
import { NotificationsButton } from 'features/NotificationsButton';
import { AvatarDropdown } from 'features/AvatarDropdown';

interface NavBarProps {
  className?: string;
}

export const NavBar = memo(({ className }: NavBarProps) => {
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);

  const handleCloseModal = useCallback(() => {
    setIsOpenAuthModal(false);
  }, []);

  const handleShowModal = useCallback(() => {
    setIsOpenAuthModal(true);
  }, []);

  return (
    <header className={classNames(cls.navBar, {}, [className])}>
      <Text
        title="Sherry App"
        tagTitle="h1"
        size="sizeL"
        className={cls.title}
      />
      {authData && (
        <HStack gap="32">
          <NotificationsButton />
          <AvatarDropdown />
        </HStack>
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
