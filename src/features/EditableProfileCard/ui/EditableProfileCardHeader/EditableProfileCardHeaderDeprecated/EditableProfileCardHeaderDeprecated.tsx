import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from '../EditableProfileCardHeader.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/deprecated/Button';
import { EditableProfileCardHeaderState } from '../EditableProfileCardHeader';

export const EditableProfileCardHeaderDeprecated: FC<
  EditableProfileCardHeaderState
> = ({
  className,
  canEdit,
  isReadOnly,
  onEditProfile,
  onCancelEditProfile,
  onSaveProfile,
}) => {
  const { t } = useTranslation('profile');

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
              onClick={onEditProfile}
              data-testid="EditableProfileCard.EditButton"
            >
              {t('Редактировать')}
            </Button>
          )}
          {!isReadOnly && (
            <div className={cls.btnWrapper}>
              <Button
                variant="outlineRed"
                onClick={onCancelEditProfile}
                data-testid="EditableProfileCard.CancelButton"
              >
                {t('Отменить')}
              </Button>
              <Button
                variant="outline"
                onClick={onSaveProfile}
                data-testid="EditableProfileCard.SaveButton"
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
