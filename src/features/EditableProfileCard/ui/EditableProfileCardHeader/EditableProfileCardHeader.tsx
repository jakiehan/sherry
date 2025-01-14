import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './EditableProfileCardHeader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/Text';
import { Button } from 'shared/Button';
import { useSelector } from 'react-redux';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getUserAuthData } from 'entities/User';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';

interface EditableProfileCardHeaderProps {
  className?: string;
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

  return (
    <div className={classNames(cls.editableProfileCardHeader, {}, [className])}>
      <Text
        title={t('Профиль')}
        tagTitle="h2"
      />
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
