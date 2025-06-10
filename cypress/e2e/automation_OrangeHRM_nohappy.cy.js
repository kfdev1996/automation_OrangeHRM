
import { faker } from "@faker-js/faker";
describe('Fluxo não feliz - Cadastro sem First Name', () => {
  it('Deve exibir erro ao tentar cadastrar colaborador sem First Name', () => {
    
    // Arrange - Preparação dos dados
    const primeiroSobrenome = faker.person.firstName
    const segundoSobrenome = faker.person.lastName();
    const ultimoNome = faker.person.lastName();
    const numeroAleatorio = faker.number.int({ min: 1000, max: 9999 });
    const dataAleatoria = faker.date.between({ from: '1996-09-23', to: '2025-03-15' }).toISOString().split('T')[0];

    const userData = {
      firstName: '',  // campo vazio para forçar o erro
      middleName: 'primeiroSonbrenome',
      lastName: '',
      emplooyedId: numeroAleatorio,
      licenseNumber: numeroAleatorio.toString(),
      licenseExpiry: dataAleatoria,
      birthDate: dataAleatoria
    };

    cy.login();

    // Act - Execução do fluxo com dados inválidos
    cy.get('a[href="/web/index.php/pim/viewPimModule"]').click();
    cy.contains('button', 'Add').click();
    
    // Não preenche firstName
    cy.location('pathname').should('eq','/web/index.php/pim/addEmployee')
    cy.get('input[name="middleName"]').type(userData.middleName);
    cy.contains('label', 'Employee Id').parents('.oxd-input-group').find('input').clear().type(userData.emplooyedId.toString());

    cy.get('button[type="submit"]').click();

    // Assert - Validações

    // verifica se existe mensagem de erro de validação
    cy.contains('Required').should('be.visible'); 

  });
});
