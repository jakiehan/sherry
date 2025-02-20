import { componentRender } from '@/shared/lib/tests/componentRender';
import { AppRouter } from './AppRouter';
import {
  getRouteAdmin,
  getRouteMain,
  getRouteProfile,
} from '../constants/router';
import { screen } from '@testing-library/react';
import { UserRole } from '@/entities/User';

describe('AppRouter', () => {
  test('должен выполниться рендер страницы main', async () => {
    componentRender(<AppRouter />, {
      route: getRouteMain(),
    });

    const page = await screen.findByTestId('main-page');

    expect(page).toBeInTheDocument();
  });

  test('должен выполниться рендер страницы notFound', async () => {
    componentRender(<AppRouter />, {
      route: '/dsasasas',
    });

    const page = await screen.findByTestId('not-found-page');

    expect(page).toBeInTheDocument();
  });

  test('должен выполниться редирект на главную страницу', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
    });

    const page = await screen.findByTestId('main-page');

    expect(page).toBeInTheDocument();
  });

  test('должен выполниться рендер страницы профиля авторизованного пользователя', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          _inited: true,
          autData: { id: '1', username: 'test', avatar: '' },
        },
      },
    });

    const page = await screen.findByTestId('profile-page');

    expect(page).toBeInTheDocument();
  });

  test('должен выполниться редирект на страницу forbidden(нет роли)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          _inited: true,
          autData: { id: '1', username: 'test', avatar: '' },
        },
      },
    });

    const page = await screen.findByTestId('forbidden-page');

    expect(page).toBeInTheDocument();
  });

  test('должен выполниться рендер страницы adminPanel(есть роль)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          _inited: true,
          autData: {
            id: '1',
            username: 'test',
            avatar: '',
            roles: [UserRole.ADMIN],
          },
        },
      },
    });

    const page = await screen.findByTestId('admin-panel-page');

    expect(page).toBeInTheDocument();
  });
});
