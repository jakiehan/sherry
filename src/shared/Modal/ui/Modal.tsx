import { FC, ReactNode } from 'react';
import cls from './Modal.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Portal } from '@/shared/Portal';
import { Overlay } from '@/shared/Overlay';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';

interface ModalProps {
  children: ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen = false,
  onClose,
  lazy = false,
}) => {
  const { isMounted, close } = useModal({ onClose, isOpen });

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(cls.modal, { [cls.opened]: isOpen }, [className])}
      >
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
