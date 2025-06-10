import { faker } from "@faker-js/faker";

describe('Fluxo não feliz - Cadastro sem First Name', () => {
  it('Deve exibir erro ao tentar cadastrar colaborador sem First Name', () => {
    // Arrange - Preparação dos dados
    const middleName = faker.person.firstName(); // Corrigido para um nome válido
    const employeeId = faker.number.int({ min: 1000, max: 9999 });
    const licenseNumber = employeeId.toString(); // Reutiliza o número aleatório
    const date = faker.date.between({ from: '1996-09-23', to: '2025-03-15' }).toISOString().split('T')[0];

    const userData = {
      firstName: '', // Campo vazio para forçar o erro
      middleName: middleName,
      lastName: '', // Campo vazio, mas será tratado
      employeeId: employeeId, // Corrigido o nome
      licenseNumber: licenseNumber,
      licenseExpiry: date,
      birthDate: date
    };

    // Act - Execução do fluxo com dados inválidos
    cy.log('Realizando login');
    cy.login(); // Assume que cy.login() está definido em commands.js

    cy.log('Navegando para o módulo PIM');
    cy.get('a[href="/web/index.php/pim/viewPimModule"]', { timeout: 10000 })
      .should('be.visible')
      .click();

    cy.log('Acessando adicionar colaborador');
    cy.contains('button', 'Add', { timeout: 10000 })
      .should('be.visible')
      .click();

    cy.log('Verificando URL de adicionar colaborador');
    cy.location('pathname').should('eq', '/web/index.php/pim/addEmployee');

    cy.log('Preenchendo middleName');
    cy.get('input[name="middleName"]', { timeout: 10000 })
      .should('be.visible')
      .type(userData.middleName);

    cy.log('Preenchendo Employee Id');
    cy.contains('label', 'Employee Id')
      .parents('.oxd-input-group')
      .find('input')
      .should('be.visible')
      .clear()
      .type(userData.employeeId.toString());

    // Não preenche firstName e lastName para forçar erro
    cy.log('Clicando em submit sem firstName');
    cy.get('button[type="submit"]', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Assert - Validações
    cy.log('Verificando mensagem de erro');
    cy.get('.oxd-input-field-error-message', { timeout: 10000 }) // Seletor mais específico
      .should('be.visible')
      .and('contain', 'Required'); // Verifica se contém "Required"
  });
});