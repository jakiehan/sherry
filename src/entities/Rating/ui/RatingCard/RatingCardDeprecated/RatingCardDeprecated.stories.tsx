import type { Meta, StoryObj } from '@storybook/react';
import { RatingCardDeprecated } from './RatingCardDeprecated';
import { StoreDecorator } from '@/shared/decorators/StoreDecorator';

const meta = {
  title: 'shared/RatingCardDeprecated',
  component: RatingCardDeprecated,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof RatingCardDeprecated>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { title: 'Заголовок', starCount: 4 },
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <Story />
      </StoreDecorator>
    ),
  ],
};
