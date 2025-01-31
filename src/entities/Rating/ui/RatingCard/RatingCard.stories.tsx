import type { Meta, StoryObj } from '@storybook/react';
import { RatingCard } from './RatingCard';

const meta = {
  title: 'shared/RatingCard',
  component: RatingCard,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
