import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCardDeprecated } from './ProfileCardDeprecated';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { AVATAR_URL } from '@/shared/ui/deprecated/Avatar/lib/constants';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCardDeprecated,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProfileCardDeprecated>;

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
      avatar: AVATAR_URL,
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
