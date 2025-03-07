import { FC, ReactNode } from 'react';
import cls from './MainLayout.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface MainLayoutProps {
  className?: string;
  header: ReactNode;
  toolbar?: ReactNode;
  sidebar: ReactNode;
  content: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({
  className,
  header,
  sidebar,
  toolbar,
  content,
}) => {
  return (
    <div className={classNames(cls.mainLayout, {}, [className])}>
      <aside className={cls.sidebar}>{sidebar}</aside>
      <main className={cls.content}>{content}</main>
      <div className={cls.rightbar}>
        <header className={cls.header}>{header}</header>
        <div className={cls.toolbar}>{toolbar}</div>
      </div>
    </div>
  );
};
