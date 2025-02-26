let profileId: string;

describe('Тестирование профиля пользователя', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((user) => {
      profileId = user.id;
      cy.visit(`profile/${user.id}`);
    });
  });

  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it('Переход на страницу профиля', () => {
    cy.getByTestId('profile-page').should('exist');
  });

  it('Профиль загружается с данными в инпутах firstname lastname', () => {
    cy.getByTestId('ProfileCard.Firstname').should('have.value', 'test');
    cy.getByTestId('ProfileCard.Lastname').should('have.value', 'user');
  });

  it('Профиль редактируется', () => {
    const newFirstname = 'firstname';
    const newLastname = 'lastname';

    cy.updateProfile(newFirstname, newLastname);
    cy.getByTestId('ProfileCard.Firstname').should('have.value', newFirstname);
    cy.getByTestId('ProfileCard.Lastname').should('have.value', newLastname);
  });
});
