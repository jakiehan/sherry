import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from '../EditableProfileCardHeader.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { EditableProfileCardHeaderState } from '../EditableProfileCardHeader';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Flex';

export const EditableProfileCardHeaderRedesigned: FC<
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
    <Card
      className={classNames('', {}, [className])}
      padding="24"
      max
    >
      <HStack
        max
        justify="between"
      >
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
              <HStack gap="16">
                <Button
                  variant="outline"
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
              </HStack>
            )}
          </>
        )}
      </HStack>
    </Card>
  );
};
