import { useTranslation } from 'react-i18next';
import cls from '../LoginForm.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { LoginFormState } from '../LoginForm';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Flex';

export const LoginFormRedesigned = ({
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
    <Card
      className={classNames(cls.loginFormRedesigned, {}, [className])}
      padding="24"
      max
    >
      <VStack gap="16">
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
          placeholder={t('Введите имя')}
          onChange={onChangeUsername}
          value={username}
          autoFocus
        />
        <Input
          placeholder={t('Введите пароль')}
          onChange={onChangePassword}
          value={password}
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
      </VStack>
    </Card>
  );
};

LoginFormRedesigned.displayName = 'LoginFormRedesigned';
