import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ProfilePageHeader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/Text';
import { Button } from 'shared/Button';
import { useSelector } from 'react-redux';
import { getProfileReadOnly } from 'features/EditableProfileCard';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  profileActions,
  updateProfileData,
} from 'features/EditableProfileCard';
import { getUserAuthData } from 'entities/User';
import { getProfileData } from 'features/EditableProfileCard/model/selectors/getProfileData/getProfileData';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({
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

  return (
    <div className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {canEdit && (
        <>
          {isReadOnly && (
            <Button
              variant="outline"
              onClick={editProfile}
            >
              {t('Редактировать')}
            </Button>
          )}
          {!isReadOnly && (
            <div className={cls.btnWrapper}>
              <Button
                variant="outlineRed"
                onClick={cancelEditProfile}
              >
                {t('Отменить')}
              </Button>
              <Button
                variant="outline"
                onClick={saveProfile}
              >
                {t('Сохранить')}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
