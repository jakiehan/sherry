import { FC, useState } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import cls from './SideBar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'features/LangSwitcher';

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSideBar = () => setCollapsed(prev => !prev);

  return (
    <div className={classNames(cls.sideBar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={toggleSideBar}>toogle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};