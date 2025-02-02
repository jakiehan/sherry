import { FC, Suspense, useEffect } from 'react';
import { NavBar } from '@/widgets/NavBar';
import { SideBar } from '@/widgets/SideBar';
import { AppRouter } from './providers/Router/ui/AppRouter';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from '@/entities/User';
import { USER_LOCALE_STORAGE_KEY } from '@/shared/constants/localstorage';

export const App: FC = () => {
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

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
        <main className="contentPage">
          <SideBar />
          {/*{inited && <AppRouter />}*/}
          <AppRouter />
        </main>
      </Suspense>
    </div>
  );
};
