import { memo, useEffect } from 'react';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  EditableProfileCard,
  fetchProfileData,
  profileReducer,
} from 'features/EditableProfileCard';
import cls from './ProfilePage.module.scss';
import { ProfilePageHeader } from '../ui/ProfilePageHeader/ProfilePageHeader';

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  return (
    <DynamicModuleLoader
      reducers={initialReducers}
      removeAfterUnmount
    >
      <div className={cls.profilePage}>
        <ProfilePageHeader />
        <EditableProfileCard />
      </div>
    </DynamicModuleLoader>
  );
});

ProfilePage.displayName = 'ProfilePage';

export default ProfilePage;
