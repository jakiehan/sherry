import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './Drawer';

const meta = {
  title: 'shared/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { isOpen: true, children: <p>Drawer</p> },
};
