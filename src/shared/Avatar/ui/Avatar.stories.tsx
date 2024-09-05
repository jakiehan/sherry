import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { AVATAR_URL } from 'shared/Avatar/lib/constants';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: AVATAR_URL,
    size: 150,
  },
};

export const Small: Story = {
  args: {
    src: AVATAR_URL,
    size: 50,
  },
};
