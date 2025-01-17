import type { Meta, StoryObj } from '@storybook/react';
import { AvatarDropdown } from './AvatarDropdown';

const meta = {
  title: 'shared/AvatarDropdown',
  component: AvatarDropdown,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AvatarDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
export const Primary: Story = {
  args: {},
};*/
