import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../..//model/selectors/getLoginUsername/getLoginUsername';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { LoginFormDeprecated } from './LoginFormDeprecated/LoginFormDeprecated';
import { LoginFormRedesigned } from './LoginFormRedesigned/LoginFormRedesigned';

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

export interface LoginFormProps {
  onSuccess?: () => void;
  className?: string;
}

export interface LoginFormState extends LoginFormProps {
  password?: string;
  username?: string;
  error?: string;
  isLoading?: boolean;
  onChangeUsername?: (value: string) => void;
  onChangePassword?: (value: string) => void;
  onLoginClick?: () => Promise<void>;
  isDisabledLoginButton?: boolean;
}

const LoginForm = ({ className, onSuccess }: LoginFormProps) => {
  const dispatch = useAppDispatch();

  const password = useSelector(getLoginPassword);
  const username = useSelector(getLoginUsername);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  const handleChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const handleChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const handleLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess && onSuccess();
    }
  }, [dispatch, username, password, onSuccess]);

  const isDisabledLoginButton =
    isLoading || !username.length || !password.length;

  const commonProps = {
    password,
    username,
    error,
    isLoading,
    onChangeUsername: handleChangeUsername,
    onChangePassword: handleChangePassword,
    onLoginClick: handleLoginClick,
    isDisabledLoginButton,
  };

  return (
    <DynamicModuleLoader
      reducers={initialReducers}
      removeAfterUnmount
    >
      <ToggleFeatures
        name="isAppRedesigned"
        on={<LoginFormRedesigned {...commonProps} />}
        off={<LoginFormDeprecated {...commonProps} />}
      />
    </DynamicModuleLoader>
  );
};

LoginForm.displayName = 'LoginForm';
export default LoginForm;
