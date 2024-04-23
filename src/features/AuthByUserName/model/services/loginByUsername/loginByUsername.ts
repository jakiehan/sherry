import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import i18n from 'i18next';
import { USER_LOCALE_STORAGE_KEY } from 'shared/constants/localstorage';
import { Simulate } from 'react-dom/test-utils';
import error = Simulate.error;

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string } // сообщение об ошибке ожидаем типом строка
>('login/loginByUsername', async (authData, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:8000/login', authData);

    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(
      USER_LOCALE_STORAGE_KEY,
      JSON.stringify(response.data)
    );

    thunkAPI.dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue('error');
  }
});
