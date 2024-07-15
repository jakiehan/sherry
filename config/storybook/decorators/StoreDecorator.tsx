import { FC, ReactNode } from 'react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { profileReducer } from 'features/EditableProfileCard';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer
};

interface StoreDecoratorProps {
  children: ReactNode;
  state: DeepPartial<StateSchema>;
  asyncReducers?: ReducersList;
}

export const StoreDecorator: FC<StoreDecoratorProps> = ({
  children,
  state,
  asyncReducers,
}) => {
  return (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      {children}
    </StoreProvider>
  );
};
