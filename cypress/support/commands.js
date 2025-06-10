import { faker } from '@faker-js/faker';

Cypress.Commands.add('login', () => {
  cy.visit('/web/index.php/auth/login'); 

  cy.log('Preenchendo login');
  cy.get('input[name="username"]', { timeout: 15000 })
    .should('be.visible')
    .type(Cypress.env('usuario'));

  cy.get('input[name="password"]', { timeout: 15000 })
    .should('be.visible')
    .type(Cypress.env('senha'));

  cy.get('button[type="submit"]', { timeout: 15000 })
    .should('be.visible')
    .click();

  cy.log('Verificando se login foi bem-sucedido');
  cy.url({ timeout: 20000 }).should('include', '/dashboard');
  cy.get('.oxd-topbar-header-title', { timeout: 10000 })
    .should('contain', 'Dashboard');
});

Cypress.Commands.add('preencherInfo', (userData) => {
  cy.get('a[href="/web/index.php/pim/viewPimModule"]').click();
  cy.contains('button', 'Add').click();
  cy.location('pathname').should('eq','/web/index.php/pim/addEmployee')
  cy.get('input[name="firstName"]').type(userData.firstName);
  cy.get('input[name="middleName"]').type(userData.middleName);
  cy.get('input[name="lastName"]').type(userData.lastName);
  cy.contains('label', 'Employee Id').parents('.oxd-input-group').find('input').clear().type (userData.emplooyedId.toString());
  cy.get('button[type="submit"]').click();
  cy.contains('Successfully Saved').should('be.visible');
  cy.get('input[name="firstName"').should('have.value', userData.firstName);
  cy.get('input[name="middleName').should('have.value', userData.middleName);
  cy.get('input[name="lastName').should('have.value', userData.lastName);
  cy.location('pathname', { timeout: 6000 }).should('include', '/web/index.php/pim/viewPersonalDetails/');
  cy.contains('label', "Driver's License Number").parents('.oxd-input-group').find('input').clear().type(userData.licenseNumber);
  cy.contains('label', 'License Expiry Date').parents('.oxd-input-group').find('input').should('be.visible').clear().type(userData.licenseExpiry);
  cy.get('i.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click({ force: true });
  cy.contains('div', 'Brazilian').click();
  cy.get('.oxd-select-text').eq(1).click();
  cy.get('.oxd-select-dropdown').contains('Single').click();
  cy.contains('label', 'Date of Birth').parents('.oxd-input-group').find('input').clear().type(userData.birthDate);
  cy.contains('label', 'Male').click();
  cy.get('[data-v-10d463b7][data-v-6653c066]').click();
  cy.contains('Successfully Updated').should('be.visible');
});

Cypress.Commands.add('logout',()=>{

cy.get('.oxd-userdropdown-name').click();
cy.contains('Logout').click();
cy.location('pathname').should('eq', '/web/index.php/auth/login');


});