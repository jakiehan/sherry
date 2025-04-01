import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ProfileCardRedesigned.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/redesigned/Flex';
import { Card } from '@/shared/ui/redesigned/Card';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

export const ProfileCardRedesignedSkeleton = () => {
  return (
    <Card className={cls.profileCard}>
      <Skeleton
        borderRadius="50%"
        height={120}
        width={120}
      />
      <HStack
        gap="24"
        max
      >
        <VStack
          max
          gap="16"
        >
          <Skeleton height={32} />
          <Skeleton height={32} />
          <Skeleton height={32} />
          <Skeleton height={32} />
        </VStack>
        <VStack
          max
          gap="16"
        >
          <Skeleton height={32} />
          <Skeleton height={32} />
          <Skeleton height={32} />
          <Skeleton height={32} />
        </VStack>
      </HStack>
    </Card>
  );
};

export const ProfileCardRedesignedError = () => {
  const { t } = useTranslation('profile');

  return (
    <div className={classNames(cls.profileCard, {}, [cls.error])}>
      <Text
        variant="error"
        align="center"
        title={t('При загрузке данных произошла ошибка')}
        text={t('Попробуйте обновить страницу')}
      />
    </div>
  );
};

export const ProfileCardRedesigned: FC<ProfileCardProps> = ({
  className,
  data,
  readOnly,
  onChangeLastName,
  onChangeFirstName,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}) => {
  const { t } = useTranslation('profile');

  return (
    <Card className={classNames(cls.profileCard, {}, [className])}>
      {data?.avatar && (
        <Avatar
          size={120}
          src={data.avatar}
        />
      )}
      <HStack
        gap="24"
        max
      >
        <VStack
          max
          gap="16"
        >
          <Input
            label={`${t('Имя')}:`}
            value={data?.first}
            readOnly={readOnly}
            minLength={2}
            onChange={onChangeFirstName}
            data-testid="ProfileCard.Firstname"
          />
          <Input
            label={`${t('Фамилия')}:`}
            value={data?.lastname}
            readOnly={readOnly}
            onChange={onChangeLastName}
            data-testid="ProfileCard.Lastname"
          />
          <Input
            label={`${t('Возраст')}:`}
            value={data?.age}
            type="number"
            readOnly={readOnly}
            onChange={onChangeAge}
            className={cls.hideArrow}
          />
          <Input
            label={`${t('Город')}:`}
            value={data?.city}
            readOnly={readOnly}
            onChange={onChangeCity}
          />
        </VStack>
        <VStack
          max
          gap="16"
        >
          <Input
            label={`${t('Имя пользователя')}:`}
            value={data?.username}
            readOnly={readOnly}
            onChange={onChangeUsername}
          />
          <Input
            label={`${t('Ссылка на аватар')}:`}
            value={data?.avatar}
            readOnly={readOnly}
            onChange={onChangeAvatar}
          />
          <CurrencySelect
            value={data?.currency}
            onChange={onChangeCurrency}
            readOnly={readOnly}
          />
          <CountrySelect
            value={data?.country}
            onChange={onChangeCountry}
            readOnly={readOnly}
          />
        </VStack>
      </HStack>
    </Card>
  );
};
