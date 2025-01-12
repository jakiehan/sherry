import { memo, useCallback } from 'react';
import cls from './Code.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/Button';
import CopyIcon from 'app/styles/assets/icons/copy.svg';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
  const copy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.code, {}, [className])}>
      <Button
        className={cls.copyBtn}
        onClick={copy}
      >
        <CopyIcon className={cls.icon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});

Code.displayName = 'Code';
