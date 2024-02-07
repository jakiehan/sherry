import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonVariant } from './Button';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary',
  },
};

export const Clear: Story = {
  args: {
    children: 'Secondary',
    variant: ButtonVariant.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: ButtonVariant.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Outline',
    variant: ButtonVariant.OUTLINE,
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
