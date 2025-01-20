import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkVariant } from './AppLink';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    to: '/',
    children: 'Link',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: AppLinkVariant.PRIMARY },
};

export const PrimaryDark: Story = {
  args: { variant: AppLinkVariant.PRIMARY },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};

export const Secondary: Story = {
  args: { variant: AppLinkVariant.SECONDARY },
};

export const SecondaryDark: Story = {
  args: { variant: AppLinkVariant.SECONDARY },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
