import { memo, useState } from 'react';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { LangSwitcher } from '@/features/LangSwitcher';
import cls from './SideBar.module.scss';
import { Button } from '@/shared/ui/Button';
import { SideBarItem } from '../../ui/SideBarItem/SideBarItem';
import { useSelector } from 'react-redux';
import { getSideBarItems } from '../../model/selectors/getSideBarItems';

interface SideBarProps {
  className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSideBar = () => setCollapsed((prev) => !prev);

  const sideBarItemsList = useSelector(getSideBarItems);

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
        onClick={toggleSideBar}
        className={cls.collapseBtn}
        variant="backgroundInverted"
        size="sizeL"
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
    </aside>
  );
});

SideBar.displayName = 'SideBar';
