import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ProfileCardDeprecated.module.scss';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { Input } from '@/shared/ui/deprecated/Input';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';

const LABEL_WIDTH = 150;

export const ProfileCardDeprecatedLoader = () => {
  return (
    <div className={cls.profileCard}>
      <Loader />
    </div>
  );
};

export const ProfileCardDeprecatedError = () => {
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

export const ProfileCardDeprecated: FC<ProfileCardProps> = ({
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
            data-testid="ProfileCardDeprecated.Firstname"
            labelWidth={LABEL_WIDTH}
          />
          <Input
            label={t('Ваша фамилия')}
            value={data?.lastname}
            variant="outlined"
            readOnly={readOnly}
            onChange={onChangeLastName}
            data-testid="ProfileCardDeprecated.Lastname"
            labelWidth={LABEL_WIDTH}
          />
          <Input
            label={t('Ваш возраст')}
            value={data?.age}
            type="number"
            variant="outlined"
            readOnly={readOnly}
            onChange={onChangeAge}
            className={cls.hideArrow}
            labelWidth={LABEL_WIDTH}
          />
          <Input
            label={t('Город')}
            value={data?.city}
            variant="outlined"
            readOnly={readOnly}
            onChange={onChangeCity}
            labelWidth={LABEL_WIDTH}
          />
          <Input
            label={t('Имя пользователя')}
            value={data?.username}
            variant="outlined"
            readOnly={readOnly}
            onChange={onChangeUsername}
            labelWidth={LABEL_WIDTH}
          />
          <Input
            label={t('Ссылка на аватар')}
            value={data?.avatar}
            variant="outlined"
            readOnly={readOnly}
            onChange={onChangeAvatar}
            labelWidth={LABEL_WIDTH}
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
        </div>
      </div>
    </article>
  );
};
