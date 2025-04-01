import type { Meta, StoryObj } from '@storybook/react';
import { CommentCardRedesigned } from './CommentCardRedesigned';

const meta = {
  title: 'shared/CommentCardRedesigned',
  component: CommentCardRedesigned,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CommentCardRedesigned>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
export const Primary: Story = {
  args: {},
};*/
