import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';

const meta = {
  title: 'shared/CommentCard',
  component: CommentCard,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
export const Primary: Story = {
  args: {},
};*/
