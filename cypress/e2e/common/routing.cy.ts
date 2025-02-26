describe('Тестирование роутинга приложения', () => {
  describe('Пользователь не авторизован', () => {
    it('Переход на главную страницу', () => {
      cy.visit('/');
      cy.getByTestId('main-page').should('exist');
    });

    it('Переход на страницу профиля - редирект на главную', () => {
      cy.visit('/profile/1');
      cy.getByTestId('main-page').should('exist');
    });

    it('Переход на несуществующий маршрут', () => {
      cy.visit('/sasas');
      cy.getByTestId('not-found-page').should('exist');
    });
  });

  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.login();
    });

    it('Переход на страницу профиля', () => {
      cy.visit('/profile/1');
      cy.getByTestId('profile-page').should('exist');
    });

    it('Переход на страницу статей', () => {
      cy.visit('/articles');
      cy.getByTestId('article-page').should('exist');
    });
  });
});
