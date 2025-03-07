import { FC, Suspense, useEffect } from 'react';
import { NavBar } from '@/widgets/NavBar';
import { SideBar } from '@/widgets/SideBar';
import { AppRouter } from './providers/Router/ui/AppRouter';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useGetUserDataByIdQuery, userActions } from '@/entities/User';
import { USER_LOCALE_STORAGE_KEY } from '@/shared/constants/localstorage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from '@/widgets/PageLoader';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { MainLayout } from '@/shared/layouts/MainLayout';

const userId = localStorage.getItem(USER_LOCALE_STORAGE_KEY);

export const App: FC = () => {
  const dispatch = useAppDispatch();

  const id = userId?.length ? JSON.parse(userId) : '';

  const { data, isFetching } = useGetUserDataByIdQuery(id, {
    skip: !userId,
  });

  useEffect(() => {
    if (data) {
      dispatch(userActions.setAuthData(data));
    }
  }, [data, dispatch]);

  if (isFetching) {
    return <PageLoader />;
  }

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      off={
        <div className={classNames('app', {}, [])}>
          <Suspense fallback="">
            <NavBar />
            <main className="contentPage">
              <SideBar />
              <AppRouter />
            </main>
          </Suspense>
        </div>
      }
      on={
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
      }
    />
  );
};
