import { FC, useEffect } from 'react';
import {
  getUserInited,
  useGetUserDataByIdQuery,
  userActions,
} from '@/entities/User';
import { USER_LOCALE_STORAGE_KEY } from '@/shared/constants/localstorage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from '@/widgets/PageLoader';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { AppRedesigned } from './AppRedesigned';
import { AppDeprecated } from './AppDeprecated';
import { useSelector } from 'react-redux';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { withThemeProvider } from './providers/ThemeProvider/ui/withThemeProvider';

const App: FC = () => {
  const userId = localStorage.getItem(USER_LOCALE_STORAGE_KEY);

  const dispatch = useAppDispatch();
  const isInited = useSelector(getUserInited);

  const id = userId?.length ? JSON.parse(userId) : '';

  const { data } = useGetUserDataByIdQuery(id, {
    skip: !userId,
  });

  useEffect(() => {
    if (data) {
      dispatch(userActions.setAuthData(data));
    }

    if (!userId) {
      dispatch(userActions.setInited());
    }
  }, [data, dispatch, userId]);

  if (!isInited) {
    return (
      <ToggleFeatures
        name="isAppRedesigned"
        on={
          <div className={'appRedesigned'}>
            <AppLoaderLayout />
          </div>
        }
        off={<PageLoader />}
      />
    );
  }

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={<AppRedesigned />}
      off={<AppDeprecated />}
    />
  );
};

export default withThemeProvider(App);
