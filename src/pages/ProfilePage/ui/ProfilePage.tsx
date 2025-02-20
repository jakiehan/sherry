import { memo } from 'react';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import cls from './ProfilePage.module.scss';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';

const ProfilePage = () => {
  const { id } = useParams();

  return (
    <Page
      className={cls.profilePage}
      data-testid="profile-page"
    >
      <EditableProfileCard id={id} />
    </Page>
  );
};

export default memo(ProfilePage);
