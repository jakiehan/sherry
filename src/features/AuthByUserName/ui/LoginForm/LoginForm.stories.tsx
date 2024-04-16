import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from 'features/AuthByUserName/ui/LoginForm/LoginForm';

const meta = {
  title: 'feature/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
