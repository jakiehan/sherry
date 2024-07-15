import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'app/styles/assets/icons/avatar.jpg';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      currency: Currency.RUB,
      country: Country.Russia,
      age: 30,
      city: 'Chita',
      first: 'Mikhail',
      lastname: 'Oleynik',
      username: 'sherry',
      avatar,
    },
  },
};

export const Error: Story = {
  args: {
    error: 'error',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
