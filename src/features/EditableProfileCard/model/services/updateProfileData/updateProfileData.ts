import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { VALIDATE_ERROR_MESSAGE } from '../../constants/constants';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<VALIDATE_ERROR_MESSAGE[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
  const { rejectWithValue, extra, getState } = thunkAPI;

  const formData = getProfileForm(getState());
  const errors = validateProfileData(formData);

  if (errors.length) {
    return rejectWithValue(errors);
  }

  try {
    const response = await extra.api.put<Profile>(
      `/profile/${formData?.id}`,
      formData
    );

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue([VALIDATE_ERROR_MESSAGE.SERVER_ERROR]);
  }
});
