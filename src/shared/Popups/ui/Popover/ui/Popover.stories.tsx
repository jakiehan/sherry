import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { Button } from 'shared/Button';

const meta = {
  title: 'shared/Popover',
  component: Popover,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    direction: 'bottomLeft',
    trigger: <Button>Открыть</Button>,
    children: 'тест',
  },
};
