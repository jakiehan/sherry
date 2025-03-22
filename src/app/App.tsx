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

const userId = localStorage.getItem(USER_LOCALE_STORAGE_KEY);

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const isInited = useSelector(getUserInited);

  const id = userId?.length ? JSON.parse(userId) : '';

  const { data, isFetching } = useGetUserDataByIdQuery(id, {
    skip: !userId,
  });

  useEffect(() => {
    if (data) {
      dispatch(userActions.setAuthData(data));
    }
  }, [data, dispatch]);

  if (isFetching || (userId?.length && !isInited)) {
    return <PageLoader />;
  }

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={<AppRedesigned />}
      off={<AppDeprecated />}
    />
  );
};
