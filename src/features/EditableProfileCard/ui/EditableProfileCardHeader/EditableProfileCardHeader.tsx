import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getUserAuthData } from '@/entities/User';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { EditableProfileCardHeaderDeprecated } from './EditableProfileCardHeaderDeprecated/EditableProfileCardHeaderDeprecated';
import { EditableProfileCardHeaderRedesigned } from './EditableProfileCardHeaderRedesigned/EditableProfileCardHeaderRedesigned';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export interface EditableProfileCardHeaderState
  extends EditableProfileCardHeaderProps {
  canEdit?: boolean;
  isReadOnly?: boolean;
  onEditProfile?: () => void;
  onCancelEditProfile: () => void;
  onSaveProfile: () => void;
}

export const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = ({
  className,
}) => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const canEdit = String(authData?.id) === String(profileData?.id);

  const editProfile = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const cancelEditProfile = useCallback(() => {
    dispatch(profileActions.cancelEditProfile());
  }, [dispatch]);

  const saveProfile = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  const isReadOnly = useSelector(getProfileReadOnly);

  const commonProps = {
    className,
    canEdit,
    isReadOnly,
    onEditProfile: editProfile,
    onCancelEditProfile: cancelEditProfile,
    onSaveProfile: saveProfile,
  };

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={<EditableProfileCardHeaderRedesigned {...commonProps} />}
      off={<EditableProfileCardHeaderDeprecated {...commonProps} />}
    />
  );
};
