import { StateSchema } from 'app/providers/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Returned, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Returned, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Returned, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;
  getState: () => StateSchema;
  actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>;
  api: jest.MockedFunctionDeep<AxiosStatic>;

  constructor(actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.api = mockedAxios;
  }

  async callThunk(arg: Arg) {
    const actionCreator = this.actionCreator(arg);
    const action = await actionCreator(this.dispatch, this.getState, {
      api: this.api,
    });

    return action;
  }
}
