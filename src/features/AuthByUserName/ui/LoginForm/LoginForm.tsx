import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/Button';
import { Input } from '@/shared/Input';
import { useSelector } from 'react-redux';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text } from '@/shared/Text';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../..//model/selectors/getLoginUsername/getLoginUsername';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

const LABEL_WIDTH = 180;

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

export interface LoginFormProps {
  onSuccess?: () => void;
  className?: string;
}

const LoginForm = ({ className, onSuccess }: LoginFormProps) => {
  const dispatch = useAppDispatch();

  const password = useSelector(getLoginPassword);
  const username = useSelector(getLoginUsername);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  const { t } = useTranslation();

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

  return (
    <DynamicModuleLoader
      reducers={initialReducers}
      removeAfterUnmount
    >
      <div className={classNames(cls.loginForm, {}, [className])}>
        <Text title={t('Форма авторизации')} />
        <div className={cls.message}>
          {error && (
            <Text
              text={error}
              variant="error"
            />
          )}
        </div>
        <Input
          label={t('Введите имя')}
          onChange={handleChangeUsername}
          value={username}
          autoFocus
          labelWidth={LABEL_WIDTH}
        />
        <Input
          label={t('Введите пароль')}
          onChange={handleChangePassword}
          value={password}
          labelWidth={LABEL_WIDTH}
          type="password"
        />
        <Button
          variant="outline"
          className={cls.btnLogin}
          onClick={handleLoginClick}
          disabled={isDisabledLoginButton}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

LoginForm.displayName = 'LoginForm';
export default LoginForm;
