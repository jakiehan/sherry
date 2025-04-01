import type { Meta, StoryObj } from '@storybook/react';
import { NotificationsItem } from './NotificationsItem';
import { StoreDecorator } from '@/shared/decorators/StoreDecorator';

const meta = {
  title: 'shared/NotificationsItem',
  component: NotificationsItem,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NotificationsItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    item: {
      title: 'Уведомление',
      description: 'Вам пришло уведомление',
      id: '1',
      userId: '1',
    },
  },
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <Story />
      </StoreDecorator>
    ),
  ],
};
