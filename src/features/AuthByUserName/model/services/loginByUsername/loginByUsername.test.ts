import { loginByUsername } from './loginByUsername';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';

describe('loginByUsername', () => {
  test('success login', async () => {
    const userValue = { username: 'user', id: '1' };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const action = await thunk.callThunk({
      username: 'admin',
      password: '123',
    });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(action.meta.requestStatus).toBe('fulfilled');
    expect(action.payload).toEqual(userValue);
  });

  test('error login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const action = await thunk.callThunk({
      username: 'admin',
      password: '123',
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(action.meta.requestStatus).toBe('rejected');
    expect(action.payload).toBe('error');
  });
});
