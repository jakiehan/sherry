import type { Meta, StoryObj } from '@storybook/react';
import { NotificationsButton } from './NotificationsButton';

const meta = {
  title: 'shared/NotificationsButton',
  component: NotificationsButton,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NotificationsButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
export const Primary: Story = {
  args: {},
};*/
