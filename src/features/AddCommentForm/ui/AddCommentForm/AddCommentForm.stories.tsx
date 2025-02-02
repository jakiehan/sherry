import type { Meta, StoryObj } from '@storybook/react';
import AddCommentForm from './AddCommentForm';
import { action } from '@storybook/addon-actions';
import { StoreDecorator } from '@/shared/decorators/StoreDecorator';

const meta = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { onSendCommit: action('onSendCommit') },
  decorators: [
    (Story) => (
      <StoreDecorator
        state={{
          addCommentForm: {
            text: '',
          },
        }}
      >
        <Story />
      </StoreDecorator>
    ),
  ],
};
