import React from 'react';
import type { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { ThemeDecorator } from '../../src/shared/decorators/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/decorators/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/decorators/SuspenseDecorator';
import { Theme } from '../../src/shared/constants/theme';

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
