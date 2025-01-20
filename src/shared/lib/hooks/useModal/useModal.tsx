import { useEffect, useState } from 'react';

interface UseModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const useModal = ({ onClose, isOpen }: UseModalProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }

    return () => setIsMounted(false);
  }, [isOpen]);

  const close = () => {
    onClose?.();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close();
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

  return {
    close,
    isMounted,
  };
};
