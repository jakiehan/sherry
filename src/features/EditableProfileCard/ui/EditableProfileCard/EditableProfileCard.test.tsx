import { screen } from '@testing-library/react';
import { EditableProfileCard } from './EditableProfileCard';
import { componentRender } from 'shared/lib/tests/componentRender';
import { Profile } from '../../model/types/profile';
import { profileReducer } from '../../model/slice/profileSlice';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import userEvent from '@testing-library/user-event';
import { api } from 'shared/api/api';

const profile: Profile = {
  id: 1,
  first: 'Михаил',
  lastname: 'Олейник',
  age: 30,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Ulyanovsk',
  username: 'ehanjaki',
};

const options = {
  initialState: {
    profile: {
      data: profile,
      form: profile,
      readonly: true,
      isLoading: false,
    },
    user: {
      autData: {
        id: '1',
        username: 'ehanjaki',
        avatar: '',
      },
    },
  },
  asyncReducers: { profile: profileReducer },
};

describe('EditableProfileCard', () => {
  beforeEach(() => {
    componentRender(<EditableProfileCard id="1" />, options);
  });

  test('switch readonly mode', async () => {
    await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));
    expect(
      screen.getByTestId('EditableProfileCard.CancelButton')
    ).toBeInTheDocument();
  });

  test('reset the values', async () => {
    await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'));

    await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'value1');
    await userEvent.type(screen.getByTestId('ProfileCard.Lastname'), 'value2');

    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('value1');

    await userEvent.click(
      screen.getByTestId('EditableProfileCard.CancelButton')
    );

    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('Михаил');
  });

  test('show validate error', async () => {
    await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));

    await userEvent.click(screen.getByTestId('EditableProfileCard.SaveButton'));

    expect(
      screen.getByTestId('EditableProfileCard.Error.Paragraph')
    ).toBeInTheDocument();
  });

  test('there are no errors, a PUT request has been sent', async () => {
    const mockReq = jest.spyOn(api, 'put');

    await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));
    await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user');
    await userEvent.click(screen.getByTestId('EditableProfileCard.SaveButton'));

    expect(mockReq).toHaveBeenCalled();
  });
});
