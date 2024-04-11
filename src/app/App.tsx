import { FC, Suspense } from 'react';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { AppRouter } from 'app/providers/Router';
import { classNames } from 'shared/lib/classNames/classNames';

export const App: FC = () => {
  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <NavBar />
        <div className="contentPage">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
