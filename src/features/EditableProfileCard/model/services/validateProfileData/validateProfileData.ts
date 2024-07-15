import { Profile } from 'features/EditableProfileCard';
import { VALIDATE_ERROR_MESSAGE } from 'features/EditableProfileCard/model/types/profile';

//TODO простенькая валидация, будет время переделать
export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [VALIDATE_ERROR_MESSAGE.NO_DATA];
  }

  const { age, lastname, first } = profile;

  const errors: VALIDATE_ERROR_MESSAGE[] = [];

  if (!first) {
    errors.push(VALIDATE_ERROR_MESSAGE.INCORRECT_PROFILE_FIRSTNAME);
  }

  if (!lastname) {
    errors.push(VALIDATE_ERROR_MESSAGE.INCORRECT_PROFILE_LASTNAME);
  }

  if (age === 0) {
    errors.push(VALIDATE_ERROR_MESSAGE.INCORRECT_PROFILE_AGE);
  }

  return errors;
};
