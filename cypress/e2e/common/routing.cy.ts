import { selectByTestId } from '../../helpers/selectByTestId';

describe('Тестирование роутинга приложения', () => {
  describe('Пользователь не авторизован', () => {
    it('Переход на главную страницу', () => {
      cy.visit('/');
      cy.get(selectByTestId('main-page')).should('exist');
    });

    it('Переход на страницу профиля - редирект на главную', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('main-page')).should('exist');
    });

    it('Переход на несуществующий маршрут', () => {
      cy.visit('/sasas');
      cy.get(selectByTestId('not-found-page')).should('exist');
    });
  });

  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.login();
    });

    it('Переход на страницу профиля', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('profile-page')).should('exist');
    });

    it('Переход на страницу статей', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('article-page')).should('exist');
    });
  });
});
