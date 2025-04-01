import { memo, useCallback } from 'react';
import cls from './Code.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy-v2.svg';
import { Icon } from '../../Icon';

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
      <Icon
        clickable
        onClick={copy}
        Svg={CopyIcon}
        className={cls.copyBtn}
      />
      <code>{text}</code>
    </pre>
  );
});

Code.displayName = 'Code';
