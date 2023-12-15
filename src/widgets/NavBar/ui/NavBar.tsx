import { FC } from 'react';
import cls from './NavBar.module.scss'
import { AppLink } from 'shared/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLinkVariant } from 'shared/AppLink/ui/AppLink';
import { useTranslation } from 'react-i18next';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navBar, {}, [className])}>
      <nav className={classNames(cls.menu)}>
        <AppLink to={'/'} variant={AppLinkVariant.SECONDARY}>{t('Главная страница')}</AppLink>
        <AppLink to={'/about'} variant={AppLinkVariant.SECONDARY}>{t('О сайте')}</AppLink>
      </nav>
    </div>
  );
};