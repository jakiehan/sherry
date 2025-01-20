import type { Meta, StoryObj } from '@storybook/react';
import { NotFoundPage } from './NotFoundPage';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from '../../../../config/storybook/decorators/StoreDecorator';

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <Story />
      </StoreDecorator>
    ),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <StoreDecorator state={{}}>
          <Story />
        </StoreDecorator>
      </ThemeDecorator>
    ),
  ],
};
