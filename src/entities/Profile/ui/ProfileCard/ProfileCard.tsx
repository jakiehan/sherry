import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ProfileCard.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/Text';
import { Input } from 'shared/Input';
import { Loader } from 'shared/Loader';
import { Profile } from 'features/EditableProfileCard';
import { Avatar } from 'shared/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  readOnly?: boolean;
  error?: string;
  onChangeFirstName?: (value: string) => void;
  onChangeLastName?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = ({
  className,
  data,
  error,
  isLoading,
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

  if (isLoading) {
    return (
      <div
        className={classNames(cls.profileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
        <Text
          variant="error"
          align="center"
          title={t('При загрузке данных произошла ошибка')}
          text={t('Попробуйте обновить страницу')}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readOnly,
  };

  return (
    <article className={classNames(cls.profileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar
              size={100}
              src={data.avatar}
            />
          </div>
        )}
        <div className={cls.inputWrapper}>
          <Input
            label={t('Ваше имя')}
            value={data?.first}
            variant="outlined"
            readOnly={readOnly}
            minLength={2}
            onChange={onChangeFirstName}
          />
          <Input
            label={t('Ваша фамилия')}
            value={data?.lastname}
            variant="outlined"
            readOnly={readOnly}
            onChange={onChangeLastName}
          />
          <Input
            label={t('Ваш возраст')}
            value={data?.age}
            type="number"
            variant="outlined"
            readOnly={readOnly}
            onChange={onChangeAge}
            className={cls.hideArrow}
          />
          <Input
            label={t('Город')}
            value={data?.city}
            variant="outlined"
            readOnly={readOnly}
            onChange={onChangeCity}
          />
          <Input
            label={t('Имя пользователя')}
            value={data?.username}
            variant="outlined"
            readOnly={readOnly}
            onChange={onChangeUsername}
          />
          <Input
            label={t('Ссылка на аватар')}
            value={data?.avatar}
            variant="outlined"
            readOnly={readOnly}
            onChange={onChangeAvatar}
          />
          <CurrencySelect
            className={cls.select}
            value={data?.currency}
            onChange={onChangeCurrency}
            readOnly={readOnly}
          />
          <CountrySelect
            className={cls.select}
            value={data?.country}
            onChange={onChangeCountry}
            readOnly={readOnly}
          />
        </div>
      </div>
    </article>
  );
};
