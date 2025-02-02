import type { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { ThemeDecorator } from '../../src/app/decorators/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/app/decorators/RouterDecorator';
import { SuspenseDecorator } from '../../src/app/decorators/SuspenseDecorator';

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
