/// <reference types="cypress" />
 
describe('Cypress elements', () => {

    beforeEach(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.reload();
    });
    
    it('Checkbox', () => {
        
        cy.get('[name=formComidaFavorita]')
        .click({multiple: true});

        cy.get('#formComidaFrango')
            .should('be.checked');

    });

    it('Combobox', () => {
        cy.get('[data-test="dataEscolaridade"]')
            .select('2graucomp')
            .should('have.value','2graucomp');

        // TODO validar as opções do combo
    });

    it.only('Combobox multiple select', () => {
        cy.get('[data-testid="dataEsportes"]')
            .select(['natacao', 'Corrida','nada']);

        // TODO validar as opções selecionadas do combo multiplo
    });
})