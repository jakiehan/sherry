import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './SideBarItem.module.scss';
import { AppLink, AppLinkVariant } from 'shared/AppLink';
import { SideBarItemType } from 'widgets/SideBar/model/items';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

interface SideBarItemProps {
  item: SideBarItemType;
  collapsed: boolean;
}

export const SideBarItem = memo(({ item, collapsed }: SideBarItemProps) => {
  const { t } = useTranslation();

  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      to={item.path}
      variant={AppLinkVariant.SECONDARY}
      className={classNames(cls.link, { [cls.collapsed]: collapsed })}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.title}>{t(item.text)}</span>
    </AppLink>
  );
});

SideBarItem.displayName = 'SideBarItem';
