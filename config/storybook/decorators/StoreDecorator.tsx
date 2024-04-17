import { FC, ReactNode } from 'react';
import {
  StateSchema,
  StoreProvider,
} from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

interface StoreDecoratorProps {
  children: ReactNode;
  state: DeepPartial<StateSchema>;
}

export const StoreDecorator: FC<StoreDecoratorProps> = ({
  children,
  state,
}) => {
  return <StoreProvider initialState={state}>{children}</StoreProvider>;
};
