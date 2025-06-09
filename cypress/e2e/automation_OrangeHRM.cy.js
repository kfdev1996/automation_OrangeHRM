import { faker } from "@faker-js/faker";

describe('Fluxo de cadastro no OrangeHRM', () => {
  it('Deve realizar o cadastro de um novo colaborador com sucesso', () => {
    
    // Preparação de dados
    const primeiroNome = faker.person.firstName();
    const primeiroSobrenome = faker.person.lastName();
    const segundoSobrenome = faker.person.lastName();
    const numeroAleatorio = faker.number.int({ min: 1000, max: 9999 });
    const dataAleatoria = faker.date.between({ from: '1996-09-23', to: '2025-03-15' }).toISOString().split('T')[0];

    const userData = {
      firstName: primeiroNome,
      middleName: primeiroNome,
      lastName: segundoSobrenome,
      licenseNumber: numeroAleatorio.toString(),
      licenseExpiry: dataAleatoria,
      birthDate: dataAleatoria,
      emplooyedId: numeroAleatorio
    };

    cy.login();

    // Act — Execução
    cy.preencherInfo(userData);

    // Assert — Validações já inclusas no próprio comando 'preencherInfo'
    // Valida se aparece 'Successfully Saved' e 'Successfully Updated'
    // Valida se foram preenchidos corretamentes os campos (firstname,middlename e lastname)
    // Valida se está na URL correta

      cy.logout();

    // Valida se saiu do sistema.
    
  });

});
