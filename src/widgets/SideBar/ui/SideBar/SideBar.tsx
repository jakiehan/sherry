import { memo, useState } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'features/LangSwitcher';
import cls from './SideBar.module.scss';
import { Button, ButtonTheme } from 'shared/Button';
import { ButtonSize } from 'shared/Button/ui/Button';
import { sideBarItemsList } from '../../model/items';
import { SideBarItem } from '../../ui/SideBarItem/SideBarItem';

interface SideBarProps {
  className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSideBar = () => setCollapsed((prev) => !prev);

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
        {sideBarItemsList.map((item) => (
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
    </div>
  );
});

SideBar.displayName = 'SideBar';
