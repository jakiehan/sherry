import { FC, useState } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'features/LangSwitcher';
import cls from './SideBar.module.scss';
import { Button, ButtonTheme } from 'shared/Button';
import { ButtonSize } from 'shared/Button/ui/Button';
import { AppLink, AppLinkVariant } from 'shared/AppLink';
import { useTranslation } from 'react-i18next';
import { routePath } from 'app/providers/Router/lib/routeConfig/routeConfig';
import MainIcon from 'app/styles/assets/icons/home-page.svg';
import AboutIcon from 'app/styles/assets/icons/about-page.svg';

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSideBar = () => setCollapsed((prev) => !prev);
  const { t } = useTranslation();

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={toggleSideBar}
        className={cls.collapseBtn}
        variant={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <nav className={classNames(cls.menu)}>
        <AppLink
          to={routePath.main}
          variant={AppLinkVariant.SECONDARY}
          className={cls.link}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.title}>{t('Главная страница')}</span>
        </AppLink>
        <AppLink
          to={routePath.about}
          variant={AppLinkVariant.SECONDARY}
          className={cls.link}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.title}>{t('О сайте')}</span>
        </AppLink>
      </nav>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher shortName={collapsed} />
      </div>
    </div>
  );
};
