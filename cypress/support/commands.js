

    
    //importa a biblioteca faker para gerar dados aleatórios.
    import { faker } from '@faker-js/faker';

    // Criando um comando customizado para o processo de login.
    Cypress.Commands.add('login', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type(Cypress.env('usuario'));
    cy.get('input[name="password"]').type(Cypress.env('senha'), { log: false });
    cy.get('button[type="submit"]').click();
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index');
});

   // Criando um comando customizado para preencher as informações.
    Cypress.Commands.add ('preencherInfo', ()=>{    
    const primeiroNome = faker.person.firstName();
    const primeiroSobrenome = faker.person.lastName();
    const segundoSobrenome = faker.person.lastName();
    const numeroAleatorio = faker.number.int({ min: 1000, max: 9999 });
    const dataAlearoria = faker.date.between({from:'1996-09-23',to:'2025-03-15'});

    // O comando toISOString().split('T')[0] altera o formato da data.
    // Mudando do padrão dd-mm-yyyy para yyyy-dd-mm.
    
    const dataAleatoriaFormatada = dataAlearoria.toISOString().split('T')[0];

    cy.get('a[href="/web/index.php/pim/viewPimModule"]').click();
    cy.contains('button', 'Add').click();
    cy.get('input[name="firstName"]').type(primeiroNome.toString());
    cy.get('input[name="middleName"]').type(primeiroNome.toString());
    cy.get('input[name="lastName"]').type(segundoSobrenome.toString());
    cy.get('button[type="submit"]').click();   
    
    // Confirma se aparece o texto 'Successfully Saved', isso confirma se as informações foram realmente salvas.
    cy.contains('Successfully Saved').should('be.visible');
     
    // Confirma se está na url correta.
    cy.location('pathname',{timeout:6000}).should('include','/web/index.php/pim/viewPersonalDetails/');

    cy.contains('label', "Driver's License Number").parents('.oxd-input-group').find('input').clear().type(numeroAleatorio.toString());
    cy.contains('label', 'License Expiry Date').parents('.oxd-input-group').find('input').should('be.visible').clear().type(dataAleatoriaFormatada.toString());
    cy.get('i.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click({force: true});
    cy.contains('div','Brazilian').click();
    cy.get('.oxd-select-text').eq(1).click();
    cy.get('.oxd-select-dropdown').contains('Single').click();
    cy.contains('label', 'Date of Birth').parents('.oxd-input-group').find('input').clear().type(dataAleatoriaFormatada.toString());
    cy.contains('label', 'Male').click();
    cy.get('[data-v-10d463b7][data-v-6653c066]').click();
    cy.contains('Successfully Updated').should('be.visible');
});

