import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ProfileCard } from '@/entities/Profile';
import { useSelector } from 'react-redux';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { Text } from '@/shared/ui/Text';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { VALIDATE_ERROR_MESSAGE } from '../../model/constants/constants';

const initialReducers: ReducersList = {
  profile: profileReducer,
};

interface EditableProfileCardProps {
  id?: string;
}

export const EditableProfileCard: FC<EditableProfileCardProps> = ({ id }) => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();

  const profileFormData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const isReadOnly = useSelector(getProfileReadOnly);
  const validateErrors = useSelector(getProfileValidateErrors);

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

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
    <DynamicModuleLoader
      reducers={initialReducers}
      removeAfterUnmount
    >
      <EditableProfileCardHeader />
      {validateErrors?.length &&
        validateErrors.map((error) => (
          <Text
            key={error}
            variant="error"
            text={validateErrorsTranslate[error]}
            data-testid="EditableProfileCard.Error"
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
    </DynamicModuleLoader>
  );
};
