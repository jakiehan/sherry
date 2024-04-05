import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode; // что телепортируем
  element?: HTMLElement; // куда телепортируем
}

export const Portal: FC<PortalProps> = ({
  children,
  element = document.body,
}) => {
  return createPortal(children, element);
};
