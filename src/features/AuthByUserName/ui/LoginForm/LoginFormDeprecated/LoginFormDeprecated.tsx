import { useTranslation } from 'react-i18next';
import cls from '../LoginForm.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/deprecated/Button';
import { Input } from '@/shared/ui/deprecated/Input';
import { Text } from '@/shared/ui/deprecated/Text';
import { LoginFormState } from '../LoginForm';

const LABEL_WIDTH = 180;

export const LoginFormDeprecated = ({
  className,
  onLoginClick,
  onChangeUsername,
  username,
  password,
  onChangePassword,
  isDisabledLoginButton,
  error,
}: LoginFormState) => {
  const { t } = useTranslation();

  return (
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
        onChange={onChangeUsername}
        value={username}
        autoFocus
        labelWidth={LABEL_WIDTH}
      />
      <Input
        label={t('Введите пароль')}
        onChange={onChangePassword}
        value={password}
        labelWidth={LABEL_WIDTH}
        type="password"
      />
      <Button
        variant="outline"
        className={cls.btnLogin}
        onClick={onLoginClick}
        disabled={isDisabledLoginButton}
      >
        {t('Войти')}
      </Button>
    </div>
  );
};

LoginFormDeprecated.displayName = 'LoginFormDeprecated';
