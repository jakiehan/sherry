import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export enum VALIDATE_ERROR_MESSAGE {
  INCORRECT_PROFILE_FIRSTNAME = 'INCORRECT_PROFILE_FIRSTNAME',
  INCORRECT_PROFILE_LASTNAME = 'INCORRECT_PROFILE_LASTNAME',
  INCORRECT_PROFILE_AGE = 'INCORRECT_PROFILE_AGE',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: VALIDATE_ERROR_MESSAGE[];
}
