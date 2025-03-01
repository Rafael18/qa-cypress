/// <reference types="cypress" />
 
describe('Cypress elements', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    });

    beforeEach(() =>{
        cy.reload();
    });
    
    it('Checkbox', () => {
        
        cy.get('[name=formComidaFavorita]')
        .click({multiple: true});

        cy.get('#formComidaFrango')
            .should('be.checked');

    });

    it('should', () => {
        cy.get('[data-test="dataEscolaridade"]')
            .select('2graucomp')
            .should('have.value','2graucomp');
    });
})