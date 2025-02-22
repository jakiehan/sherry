import { USER_LOCALE_STORAGE_KEY } from '@/shared/constants/localstorage';

export const login = (
  username: string = 'testuser',
  password: string = '123'
) => {
  cy.request({
    method: 'POST',
    url: `http://localhost:8000/login`,
    body: {
      username,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LOCALE_STORAGE_KEY, JSON.stringify(body));
  });
};
