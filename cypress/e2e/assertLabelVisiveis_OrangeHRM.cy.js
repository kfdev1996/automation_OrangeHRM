describe('Validar Label - OrangeHRM', () => {

  
  const validarLabelsVisiveis = (labels) => {
    labels.forEach(label => {
      cy.contains('label', label).should('be.visible');
    });
  };

  beforeEach(() => {
    cy.login();
    cy.contains('PIM').click();
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

    validarLabelsVisiveis(labelsBusca);

    cy.contains('Add').click();
    cy.get('h6').contains('Add Employee').should('be.visible');

    const labelsAdd = [
      'Employee Full Name',
      'Employee Id'
    ];

    validarLabelsVisiveis(labelsAdd);

  });

});
