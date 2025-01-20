import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from '../../../../config/storybook/decorators/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { AVATAR_URL } from '@/shared/Avatar/lib/constants';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator
        state={{
          profile: {
            form: {
              currency: Currency.RUB,
              country: Country.Russia,
              age: 30,
              city: 'Chita',
              first: 'Mikhail',
              lastname: 'Oleynik',
              username: 'sherry',
              avatar: AVATAR_URL,
            },
          },
        }}
      >
        <Story />
      </StoreDecorator>
    ),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator
        state={{
          profile: {
            form: {
              currency: Currency.RUB,
              country: Country.Russia,
              age: 30,
              city: 'Chita',
              first: 'Mikhail',
              lastname: 'Oleynik',
              username: 'sherry',
              avatar: AVATAR_URL,
            },
          },
        }}
      >
        <ThemeDecorator theme={Theme.DARK}>
          <Story />
        </ThemeDecorator>
      </StoreDecorator>
    ),
  ],
};

export const Orange: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator
        state={{
          profile: {
            form: {
              currency: Currency.RUB,
              country: Country.Russia,
              age: 30,
              city: 'Chita',
              first: 'Mikhail',
              lastname: 'Oleynik',
              username: 'sherry',
              avatar: AVATAR_URL,
            },
          },
        }}
      >
        <ThemeDecorator theme={Theme.ORANGE}>
          <Story />
        </ThemeDecorator>
      </StoreDecorator>
    ),
  ],
};
