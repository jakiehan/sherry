import type { Meta, StoryObj } from '@storybook/react';
import { ScrollToolbar } from './ScrollToolbar';

const meta = {
  title: 'shared/ScrollToolbar',
  component: ScrollToolbar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ScrollToolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
