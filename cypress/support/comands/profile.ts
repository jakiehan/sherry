export const updateProfile = (newFirstname: string, newLastname: string) => {
  cy.getByTestId('EditableProfileCard.EditButton').click();
  cy.getByTestId('ProfileCard.Firstname').clear().type(newFirstname);
  cy.getByTestId('ProfileCard.Lastname').clear().type(newLastname);
  cy.getByTestId('EditableProfileCard.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'asas' },
    body: {
      id: 4,
      first: 'test',
      lastname: 'user',
      age: 99,
      currency: 'EUR',
      country: 'Russia',
      city: 'Ulyanovsk',
      username: 'testuser',
      avatar:
        'https://images.unsplash.com/photo-1652726692250-45965ba38a70?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(newFirstname: string, newLastname: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
