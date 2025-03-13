import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from '@/shared/decorators/ThemeDecorator';

import { Theme } from '@/shared/constants/theme';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'alskask;laks;lkls;aks;lkl;kl;aksakl;ska;ks;aksaks;aks;aks;;ak;s',
    isOpen: true,
  },
};

export const Dark: Story = {
  args: {
    children: 'alskask;laks;lkls;aks;lkl;kl;aksakl;ska;ks;aksaks;aks;aks;;ak;s',
    isOpen: true,
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
