import type { Preview } from '@storybook/react';
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/decorators/ThemeDecorator';
import { RouterDecorator } from '@/shared/decorators/RouterDecorator';
import { SuspenseDecorator } from '@/shared/decorators/SuspenseDecorator';
import { Theme } from '../../src';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <RouterDecorator>
        <SuspenseDecorator>
          <ThemeDecorator theme={Theme.LIGHT}>
            <Story />
          </ThemeDecorator>
        </SuspenseDecorator>
      </RouterDecorator>
    ),
  ],
};

export default preview;
