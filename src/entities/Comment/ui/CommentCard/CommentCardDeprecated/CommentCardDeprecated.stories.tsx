import type { Meta, StoryObj } from '@storybook/react';
import { CommentCardDeprecated } from './CommentCardDeprecated';

const meta = {
  title: 'shared/CommentCardDeprecated',
  component: CommentCardDeprecated,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CommentCardDeprecated>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
export const Primary: Story = {
  args: {},
};*/
