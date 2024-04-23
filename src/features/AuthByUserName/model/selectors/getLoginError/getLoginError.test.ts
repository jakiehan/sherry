import { getLoginError } from '../getLoginError/getLoginError';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getLoginError', () => {
  test('should return the correct error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { error: 'error' },
    };

    expect(getLoginError(state as StateSchema)).toEqual('error');
  });

  test('should work is empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
