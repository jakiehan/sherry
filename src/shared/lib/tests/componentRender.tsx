import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from '@/app/providers/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { ReducersList } from '../components/DynamicModuleLoader/DynamicModuleLoader';

interface ComponentRenderOptionsProps {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: ReducersList;
}

export function componentRender(
  component: ReactNode,
  options: ComponentRenderOptionsProps = {}
) {
  const { route = '/', initialState, asyncReducers } = options;

  return render(
    <StoreProvider
      asyncReducers={asyncReducers}
      initialState={initialState}
    >
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
}
