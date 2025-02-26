import { USER_LOCALE_STORAGE_KEY } from '@/shared/constants/localstorage';
import { User } from '@/entities/User';

export const login = (
  username: string = 'testuser',
  password: string = '123'
) => {
  return cy
    .request({
      method: 'POST',
      url: `http://localhost:8000/login`,
      body: {
        username,
        password,
      },
    })
    .then(({ body }) => {
      window.localStorage.setItem(
        USER_LOCALE_STORAGE_KEY,
        JSON.stringify(body)
      );
      return body;
    });
};

declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<User>;
    }
  }
}
