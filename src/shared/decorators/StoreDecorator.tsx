import { FC, ReactNode } from 'react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUserName/testing';
import { profileReducer } from '@/features/EditableProfileCard/testing';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { addCommentFormReducer } from '@/features/AddCommentForm/testing';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
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
