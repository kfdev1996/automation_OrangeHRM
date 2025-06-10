describe('Validar Label - OrangeHRM', () => {
  const validarLabelsVisiveis = (labels) => {
    labels.forEach(label => {
      cy.contains('label', label, { timeout: 10000 })
        .should('be.visible');
    });
  };

  beforeEach(() => {
    cy.log('Realizando login');
    cy.login(); 
    cy.log('Navegando para PIM');
    cy.contains('PIM', { timeout: 10000 })
      .should('be.visible')
      .click();
  });

  it('Validando Labels da tela de busca', () => {
    const labelsBusca = [
      'Employee Name',
      'Employee Id',
      'Employment Status',
      'Include',
      'Supervisor Name',
      'Job Title',
      'Sub Unit'
    ];

    cy.log('Validando labels da tela de busca');
    validarLabelsVisiveis(labelsBusca);

    cy.log('Clicando em Add');
    cy.contains('Add', { timeout: 10000 })
      .should('be.visible')
      .click();

    cy.log('Verificando título Add Employee');
    cy.get('h6').contains('Add Employee', { timeout: 10000 })
      .should('be.visible');

    const labelsAdd = [
      'Employee Full Name',
      'Employee Id'
    ];

    cy.log('Validando labels da tela de adicionar');
    validarLabelsVisiveis(labelsAdd);
  });
});