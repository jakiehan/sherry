import { memo, ReactNode, useCallback, useEffect } from 'react';
import cls from './Drawer.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Portal } from '@/shared/Portal';
import { Overlay } from '@/shared/Overlay';
import {
  AnimationProvider,
  useAnimationLibs,
} from '@/shared/lib/components/AnimationProvider';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const height = window.innerHeight - 100;

const DrawerContent = memo(
  ({ className, children, onClose, isOpen, lazy = false }: DrawerProps) => {
    const { Spring, Gesture } = useAnimationLibs();
    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

    const openDrawer = useCallback(() => {
      api.start({ y: 0, immediate: false });
    }, [api]);

    useEffect(() => {
      if (isOpen) {
        openDrawer();
      }
    }, [api, isOpen, openDrawer]);

    const close = (velocity = 0) => {
      api.start({
        y: height,
        immediate: false,
        config: { ...Spring.config.stiff, velocity },
        onResolve: onClose,
      });
    };

    const bind = Gesture.useDrag(
      ({
        last,
        velocity: [, vy],
        direction: [, dy],
        movement: [, my],
        cancel,
      }) => {
        if (my < -70) cancel();

        if (last) {
          if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
            close();
          } else {
            openDrawer();
          }
        } else {
          api.start({ y: my, immediate: true });
        }
      },
      {
        from: () => [0, y.get()],
        filterTaps: true,
        bounds: { top: 0 },
        rubberband: true,
      }
    );

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    if (!isOpen) {
      return null;
    }

    return (
      <Portal>
        <div className={classNames(cls.drawer, {}, [className])}>
          <Overlay onClick={() => close()} />
          <Spring.a.div
            className={cls.sheet}
            style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
            {...bind()}
          >
            {children}
          </Spring.a.div>
        </div>
      </Portal>
    );
  }
);

const DrawerAsync = (props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props} />;
};

export const Drawer = (props: DrawerProps) => {
  return (
    <AnimationProvider>
      <DrawerAsync {...props} />
    </AnimationProvider>
  );
};

DrawerContent.displayName = 'DrawerContent';
