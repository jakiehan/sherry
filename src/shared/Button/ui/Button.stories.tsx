import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

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
    variant: 'clear',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

export const OutlineSizeL: Story = {
  args: {
    children: 'Outline L',
    variant: 'outline',
    size: 'sizeL',
  },
};

export const OutlineSizeXL: Story = {
  args: {
    children: 'Outline XL',
    variant: 'outline',
    size: 'sizeXL',
  },
};

export const Background: Story = {
  args: {
    children: 'Background',
    variant: 'background',
  },
};

export const BackgroundInverted: Story = {
  args: {
    children: 'Background Inverted',
    variant: 'backgroundInverted',
  },
};

export const Square: Story = {
  args: {
    children: '>',
    variant: 'backgroundInverted',
    square: true,
  },
};

export const SquareM: Story = {
  args: {
    children: '>',
    variant: 'backgroundInverted',
    square: true,
    size: 'sizeM',
  },
};

export const SquareL: Story = {
  args: {
    children: '>',
    variant: 'backgroundInverted',
    square: true,
    size: 'sizeL',
  },
};

export const SquareXL: Story = {
  args: {
    children: '>',
    variant: 'backgroundInverted',
    square: true,
    size: 'sizeXL',
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
