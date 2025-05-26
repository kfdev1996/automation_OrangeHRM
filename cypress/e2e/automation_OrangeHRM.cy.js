describe('Login no sistema', () => {

  before(() => {
    cy.login();
  });

  it('Preenchendo Informações', () => {
    cy.preencherInfo();
  });

});
