import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AppLink as AppLinkDeprecated,
  AppLinkVariant,
} from '@/shared/ui/deprecated/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { SideBarItemType } from '../../model/types/sideBar';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import cls from './SideBarItem.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';

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
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <AppLink
          to={item.path}
          className={classNames(cls.linkRedesigned, {
            [cls.collapsedRedesigned]: collapsed,
          })}
          activeClassName={cls.active}
        >
          <Icon Svg={item.Icon} />
          <span className={cls.title}>{t(item.text)}</span>
        </AppLink>
      }
      off={
        <AppLinkDeprecated
          to={item.path}
          variant={AppLinkVariant.SECONDARY}
          className={classNames(cls.link, { [cls.collapsed]: collapsed })}
        >
          <item.Icon className={cls.icon} />
          <span className={cls.title}>{t(item.text)}</span>
        </AppLinkDeprecated>
      }
    />
  );
});

SideBarItem.displayName = 'SideBarItem';
