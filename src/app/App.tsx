import { FC, Suspense, useEffect } from 'react';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { AppRouter } from 'app/providers/Router';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { USER_LOCALE_STORAGE_KEY } from 'shared/constants/localstorage';

export const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem(USER_LOCALE_STORAGE_KEY);

    if (user) {
      dispatch(userActions.initAuthData(JSON.parse(user)));
    }
  }, [dispatch]);

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
