import { FC, Suspense } from 'react';
import { NavBar } from '@/widgets/NavBar';
import { SideBar } from '@/widgets/SideBar';
import { AppRouter } from './providers/Router/ui/AppRouter';
import { classNames } from '@/shared/lib/classNames/classNames';
import { MainLayout } from '@/shared/layouts/MainLayout';

export const AppRedesigned: FC = () => {
  return (
    <div className={classNames('appRedesigned', {}, [])}>
      <Suspense fallback="">
        <MainLayout
          header={<NavBar />}
          content={<AppRouter />}
          sidebar={<SideBar />}
          toolbar={<div>1</div>}
        />
      </Suspense>
    </div>
  );
};
