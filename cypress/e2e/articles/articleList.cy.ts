describe('Тестирование списка статей', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit('/articles');
    });
  });

  it('Загружается список статей', () => {
    cy.getByTestId('articleList').should('exist');
  });

  it('Загружается фейк список статей (стабы фикстуры)', () => {
    cy.intercept('GET', '**/articles?*', { fixture: 'articleList.json' });
    cy.getByTestId('articleList').should('exist');
  });

  it.skip('Пример - скип теста', () => {
    cy.getByTestId('articleList').should('exist');
  });
});
