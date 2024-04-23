import { getLoginIsLoading } from '../getLoginIsLoading/getLoginIsLoading';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getLoginIsLoading', () => {
  test('should return the correct isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { isLoading: true },
    };

    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should work is empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
