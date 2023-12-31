import { FC, useState } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'features/LangSwitcher';
import cls from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSideBar = () => setCollapsed((prev) => !prev);

  return (
    <div
      className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button
        type="button"
        onClick={toggleSideBar}
      >
        toogle
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
