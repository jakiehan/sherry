import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
  text: '',
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  /*extraReducers: (builder) => {
    builder
      .addCase(.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        .fulfilled,
        (state, action: PayloadAction<>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },*/
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
