describe('Тестирование списка статей', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit('articles');
    });
  });

  it('Загружается список статей', () => {
    cy.getByTestId('articleList').should('exist');
  });
});
