import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from 'entities/User';
import { USER_LOCALE_STORAGE_KEY } from 'shared/constants/localstorage';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.autData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALE_STORAGE_KEY);

      if (user) {
        state.autData = JSON.parse(user);
      }
    },
    logout: (state) => {
      state.autData = undefined;
      localStorage.removeItem(USER_LOCALE_STORAGE_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
