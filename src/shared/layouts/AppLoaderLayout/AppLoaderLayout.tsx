import { FC } from 'react';
import cls from './AppLoaderLayout.module.scss';
import { MainLayout } from '../MainLayout/MainLayout';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Flex';

interface AppLoaderLayoutLayoutProps {
  className?: string;
}

export const AppLoaderLayout: FC<AppLoaderLayoutLayoutProps> = ({
  className,
}) => {
  return (
    <MainLayout
      className={className}
      sidebar={
        <div className={cls.sidebarSkeleton}>
          <Skeleton
            width="100%"
            height="100%"
            borderRadius={20}
          />
        </div>
      }
      content={
        <VStack gap="16">
          <Skeleton
            width={250}
            height={24}
          />
          <Skeleton
            width={450}
            height={24}
          />
          <Skeleton
            width="100%"
            height={240}
            borderRadius={24}
          />
          <Skeleton
            width="100%"
            height={240}
            borderRadius={24}
          />
        </VStack>
      }
      header={
        <div className={cls.headerSkeleton}>
          <HStack gap="24">
            <Skeleton
              width={32}
              height={32}
              borderRadius="50%"
            />
            <Skeleton
              width={40}
              height={40}
              borderRadius="50%"
            />
          </HStack>
        </div>
      }
    />
  );
};
