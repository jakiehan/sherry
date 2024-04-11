import { FC, ReactNode, useEffect } from 'react';
import cls from './Modal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
  children: ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen = false,
  onClose,
}) => {
  const closeHandler = () => {
    onClose && onClose();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div
        className={classNames(cls.modal, { [cls.opened]: isOpen }, [className])}
      >
        <div
          className={cls.overlay}
          onClick={closeHandler}
        >
          <div
            className={cls.content}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
