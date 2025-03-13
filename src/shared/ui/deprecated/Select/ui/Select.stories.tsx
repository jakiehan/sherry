import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
  title: 'shared/Select',
  component: Select,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Выберите значение',
    options: [
      { value: 'Значение 1', content: 'Значение 1' },
      { value: 'Значение 2', content: 'Значение 2' },
      { value: 'Значение 3', content: 'Значение 3' },
    ],
  },
};
