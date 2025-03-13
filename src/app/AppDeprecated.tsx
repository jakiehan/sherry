import { FC, Suspense } from 'react';
import { NavBar } from '@/widgets/NavBar';
import { SideBar } from '@/widgets/SideBar';
import { AppRouter } from './providers/Router/ui/AppRouter';
import { classNames } from '@/shared/lib/classNames/classNames';

export const AppDeprecated: FC = () => {
  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <NavBar />
        <main className="contentPage">
          <SideBar />
          <AppRouter />
        </main>
      </Suspense>
    </div>
  );
};
