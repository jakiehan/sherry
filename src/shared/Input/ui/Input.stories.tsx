import type { Meta, StoryObj } from '@storybook/react';
import { Input } from 'shared/Input';

const meta = {
  title: 'shared/Input',
  component: Input,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Введите имя',
    value: 'Шерри',
  },
};
