import { memo } from 'react';
import { Button } from '@/shared/ui/deprecated/Button';
import { SideBarItem } from '../../SideBarItem/SideBarItem';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SideBarDeprecated.module.scss';
import { SideBarProps } from '../SideBar';

/**
 * Устарел, больше не поддерживается
 * @deprecated
 */
export const SideBarDeprecated = memo(
  ({
    className,
    toggleSidebar,
    sidebarItems = [],
    collapsed,
  }: SideBarProps) => {
    return (
      <aside
        data-testid="sidebar"
        className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [
          className,
        ])}
      >
        <Button
          data-testid="sidebar-toggle"
          type="button"
          onClick={toggleSidebar}
          className={cls.collapseBtn}
          variant="backgroundInverted"
          size="sizeL"
          square
        >
          {collapsed ? '>' : '<'}
        </Button>
        <nav className={classNames(cls.menu)}>
          {sidebarItems.map((item) => (
            <SideBarItem
              item={item}
              collapsed={collapsed}
              key={item.path}
            />
          ))}
        </nav>
        <div className={cls.switchers}>
          <ThemeSwitcher />
          <LangSwitcher shortName={collapsed} />
        </div>
      </aside>
    );
  }
);

SideBarDeprecated.displayName = 'SideBarDeprecated';
