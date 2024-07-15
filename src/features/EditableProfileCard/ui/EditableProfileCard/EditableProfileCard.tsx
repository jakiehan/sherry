import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './EditableProfileCard.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ProfileCard } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from 'features/EditableProfileCard';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { VALIDATE_ERROR_MESSAGE } from 'features/EditableProfileCard/model/types/profile';
import { Text } from 'shared/Text';

interface EditableProfileCardProps {}

export const EditableProfileCard: FC<EditableProfileCardProps> = ({}) => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();

  const profileFormData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const isReadOnly = useSelector(getProfileReadOnly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorsTranslate = {
    [VALIDATE_ERROR_MESSAGE.INCORRECT_PROFILE_FIRSTNAME]: t(
      'Имя пользователя не может быть пустым'
    ),
    [VALIDATE_ERROR_MESSAGE.INCORRECT_PROFILE_LASTNAME]: t(
      'Фамилия пользователя не может быть пустым'
    ),
    [VALIDATE_ERROR_MESSAGE.INCORRECT_PROFILE_AGE]: t(
      'Некорректно указан возраст'
    ),
    [VALIDATE_ERROR_MESSAGE.NO_DATA]: t('Данные не указаны'),
    [VALIDATE_ERROR_MESSAGE.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
  };

  const handleChangeFirstName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ first: value }));
    },
    [dispatch]
  );

  const handleChangeLastName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ lastname: value }));
    },
    [dispatch]
  );

  const handleChangeAge = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value) }));
    },
    [dispatch]
  );

  const handleChangeCity = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ city: value }));
    },
    [dispatch]
  );

  const handleChangeUsername = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ username: value }));
    },
    [dispatch]
  );

  const handleChangeAvatar = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ avatar: value }));
    },
    [dispatch]
  );

  const handleChangeCurrency = useCallback(
    (value: Currency) => {
      dispatch(profileActions.updateProfile({ currency: value }));
    },
    [dispatch]
  );

  const handleChangeCountry = useCallback(
    (value: Country) => {
      dispatch(profileActions.updateProfile({ country: value }));
    },
    [dispatch]
  );

  return (
    <>
      {validateErrors?.length &&
        validateErrors.map((error) => (
          <Text
            key={error}
            variant="error"
            text={validateErrorsTranslate[error]}
          />
        ))}
      <ProfileCard
        data={profileFormData}
        isLoading={isLoading}
        error={error}
        readOnly={isReadOnly}
        onChangeFirstName={handleChangeFirstName}
        onChangeLastName={handleChangeLastName}
        onChangeAge={handleChangeAge}
        onChangeCity={handleChangeCity}
        onChangeUsername={handleChangeUsername}
        onChangeAvatar={handleChangeAvatar}
        onChangeCurrency={handleChangeCurrency}
        onChangeCountry={handleChangeCountry}
      />
    </>
  );
};
