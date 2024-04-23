import { getLoginPassword } from '../getLoginPassword/getLoginPassword';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getLoginPassword', () => {
  test('should return the correct password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { password: '123' },
    };

    expect(getLoginPassword(state as StateSchema)).toEqual('123');
  });

  test('should work is empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
