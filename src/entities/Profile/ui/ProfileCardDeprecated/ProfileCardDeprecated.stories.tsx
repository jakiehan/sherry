import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCardDeprecated } from './ProfileCardDeprecated';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { AVATAR_URL } from '@/shared/ui/deprecated/Avatar/lib/constants';
import { StoreDecorator } from '@/shared/decorators/StoreDecorator';

const meta = {
  title: 'entities/ProfileCardDeprecated',
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
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <Story />
      </StoreDecorator>
    ),
  ],
};
