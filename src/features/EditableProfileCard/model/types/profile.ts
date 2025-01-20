import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { VALIDATE_ERROR_MESSAGE } from '../constants/constants';

export interface Profile {
  id?: string | number;
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
