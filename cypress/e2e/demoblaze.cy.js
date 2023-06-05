/// <reference types="cypress" />

const randomString = Math.random().toString(36).slice(2, 9);
const username = 'Phoner';
const password = 'randomString';
const product = 'Samsung galaxy s6';

it('register', () => {

  cy.visit('');

  cy.get('#signin2')
  .click();

  cy.get('#sign-username')
  .clear()
  .type(randomString);

  cy.get('#sign-password')
  .clear()
  .type(randomString);

  cy.get('[onclick ^= "register()"]')
  .click();

  cy.on('window:alert', (str) => {
    expect(str).to.equal('Sign up successful.')
  })
}
);

it('log in with valid credentials', () => {

  cy.login(username, password);

  cy.get('#nameofuser')
  .should('contain', username);
}
);

it(`Add ${product} in cart`, () => {

  cy.login(username, password);

  cy.contains(product)
  .click();

  cy.contains('Add to cart')
  .click();

  cy.on('window:alert', (str) => {
    expect(str).to.equal('Product added.')
  })

  cy.get('#cartur')
  .click();

  cy.get('.table-responsive')
  .should('contain', product);
}
);
