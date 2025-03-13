import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { setFeatureFlags } from '@/shared/lib/featureFlags';

const initialState: UserSchema = {
  _inited: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.autData = action.payload;
      setFeatureFlags(action.payload?.features);
    },
    logout: (state) => {
      state.autData = undefined;
      setFeatureFlags({});
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
