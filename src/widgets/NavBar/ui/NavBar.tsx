import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import { Button } from '@/shared/ui/deprecated/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from '@/features/AuthByUserName';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Text } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesigned/Flex';
import { NotificationsButton } from '@/features/NotificationsButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';

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
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <div className={classNames(cls.navBarRedesigned, {}, [className])}>
          {authData && (
            <HStack
              gap="24"
              align="baseline"
            >
              <NotificationsButton />
              <AvatarDropdown className={cls.avatar} />
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
        </div>
      }
      off={
        <header className={classNames(cls.navBar, {}, [className])}>
          <Text
            title="Sherry App"
            tagTitle="h1"
            size="sizeL"
            className={cls.title}
          />
          {authData && (
            <HStack gap="24">
              <NotificationsButton />
              <AvatarDropdown className={cls.avatar} />
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
      }
    />
  );
});

NavBar.displayName = 'NavBar';
