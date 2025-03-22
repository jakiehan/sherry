import { memo } from 'react';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { LangSwitcher } from '@/features/LangSwitcher';
import cls from './SideBarRedesigned.module.scss';
import { SideBarItem } from '../../../ui/SideBarItem/SideBarItem';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-down.svg';
import { SideBarItemType } from '../../../model/types/sideBar';

interface SideBarRedesignedProps {
  className?: string;
  sidebarItems: SideBarItemType[];
  toggleSidebar: () => void;
  collapsed: boolean;
}

export const SideBarRedesigned = memo(
  ({
    className,
    toggleSidebar,
    sidebarItems,
    collapsed,
  }: SideBarRedesignedProps) => {
    return (
      <div
        data-testid="sidebar"
        className={classNames(
          cls.sideBarRedesigned,
          { [cls.collapsedRedesigned]: collapsed },
          [className]
        )}
      >
        <AppLogo
          className={cls.appLogo}
          size={collapsed ? 65 : 120}
        />
        <nav className={classNames(cls.menu)}>
          {sidebarItems.map((item) => (
            <SideBarItem
              item={item}
              collapsed={collapsed}
              key={item.path}
            />
          ))}
        </nav>
        <Icon
          width={15}
          height={15}
          Svg={ArrowIcon}
          onClick={toggleSidebar}
          classNameBtn={cls.collapseBtn}
          className={cls.icon}
          clickable
        />
        <div className={cls.switchers}>
          <ThemeSwitcher />
          <LangSwitcher shortName={collapsed} />
        </div>
      </div>
    );
  }
);

SideBarRedesigned.displayName = 'SideBarRedesigned';
