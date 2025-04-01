import { FC, ReactNode } from 'react';
import cls from './Modal.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Portal } from '../../Portal';
import { Overlay } from '../../Overlay';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { useToggleFeatures } from '@/shared/lib/hooks/useToggleFeatures/useToggleFeatures';

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

  const modalClass = useToggleFeatures({
    name: 'isAppRedesigned',
    on: () => cls.modalNew,
    off: () => cls.modalOld,
  });

  const contentClass = useToggleFeatures({
    name: 'isAppRedesigned',
    on: () => '',
    off: () => cls.content,
  });

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(cls.modal, { [cls.opened]: isOpen }, [
          className,
          modalClass,
        ])}
      >
        <Overlay onClick={close} />
        <div className={contentClass}>{children}</div>
      </div>
    </Portal>
  );
};
