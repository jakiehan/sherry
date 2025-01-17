import type { Meta, StoryObj } from '@storybook/react';
import { NotificationsList } from './NotificationsList';

const meta = {
  title: 'shared/NotificationsList',
  component: NotificationsList,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NotificationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
export const Primary: Story = {
  args: {},
};*/
