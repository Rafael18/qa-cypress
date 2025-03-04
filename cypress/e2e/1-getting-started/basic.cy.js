/// <reference types="cypress" />
 
describe('Cypress basics', () => {
    
    it('should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        
        // let title = cy.title();
        // console.log(title);

        cy.title()
        .should('be.equal','Campo de Treinamento')
        .and('contain', 'Campo');

        //TODO imprimir o log no console

        // cy.title().then(title => {
        //     console.log(title);
        // });

        // cy.title().should(title => {
        //     console.log(title);
        // });

        // TODO escrever o log em um campo de texto
        var syncTitle;

        cy.title().then(title => {
            console.log(title);

            cy.get('#formNome').type(title);

            syncTitle = title;
        });

        cy.get('[data-cy="dataSobrenome"]').then(elemento => {
            elemento.val(syncTitle);
        });

        cy.get('#elementosForm\\:sugestoes').then(elemento => {
            cy.wrap(elemento).type(syncTitle);
        });
    });
});