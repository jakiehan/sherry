import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import { ThemeDecorator } from '@/app/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Title',
    text: 'subtitle',
  },
};

export const Error: Story = {
  args: {
    title: 'Title',
    text: 'subtitle',
    variant: 'error',
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Title',
  },
};

export const OnlyText: Story = {
  args: {
    text: 'subtitle',
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'Title',
    text: 'subtitle',
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title',
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};

export const OnlyTextDark: Story = {
  args: {
    text: 'subtitle',
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};

export const SizeL: Story = {
  args: {
    title: 'Title',
    text: 'subtitle',
    size: 'sizeL',
  },
};
