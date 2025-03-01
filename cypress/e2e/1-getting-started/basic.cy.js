/// <reference types="cypress" />
 
describe('Cypress basics', () => {
    before
    it('should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        
        // let title = cy.title();
        // console.log(title);

        cy.title()
        .should('be.equal','Campo de Treinamento')
        .and('contain', 'Campo');
    });
});