
Cypress.Commands.add('login', (username, password) => {
    cy.visit('');

    cy.get('#login2')
        .click();

    cy.get('#loginusername')
        .clear()
        .type(username);

    cy.get('#loginpassword')
        .clear()
        .type(password);

    cy.get('[onclick ^= "logIn()"]')
        .click();
})
