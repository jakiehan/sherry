import { FC, Suspense, useEffect } from 'react';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { AppRouter } from 'app/providers/Router';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

export const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, []);

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
