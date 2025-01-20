import { getLoginUsername } from '../getLoginUsername/getLoginUsername';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginUsername', () => {
  test('should return the correct username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { username: 'admin' },
    };

    expect(getLoginUsername(state as StateSchema)).toEqual('admin');
  });

  test('should work is empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
