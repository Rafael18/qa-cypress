/// <reference types="cypress" />
 
describe('Cypress elements Sincronimos', () => {

    beforeEach(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.reload();
    });
    
    it('Deve aguar elemento estar disponivel', () => {
        cy.get('#novoCampo').should('not.exist');
        cy.get('#buttonDelay').click();
        cy.get('#novoCampo').should('not.exist');
        cy.get('#novoCampo').should('exist');
        cy.get('#novoCampo').type('funciona');
    });

    it('Retentativas (Retrys)', () => {
        cy.get('#buttonDelay').click();
        cy.get('#novoCampo')
            .should('exist')
            .type('funciona');
    });

    it('Uso do "find"', () => {
        cy.get('#buttonList').click();
        cy.get('#lista li')
            .find('span')
            .should('contain','Item 1');

            // cy.get('#lista li')
            // .find('span')
            // .should('contain','Item 2');

        cy.get('#lista li span')
            .should('contain','Item 2');
    });

    it('Uso do find DOOM', () => {
        cy.get('#buttonListDOM').click();
        cy.get('#lista li')
            .find('span')
            .should('contain','Item 1');

        cy.get('#lista li span')
            .should('contain','Item 2');
    });

    it('Uso do Timeout', () => {
        cy.get('#buttonDelay').click();
        // cy.get('#novoCampo', {timeout: 5000})
        cy.get('#novoCampo')
            .should('exist');
    });

    it('Uso do Wait', () => {
        // cy.get('#buttonListDOM').click();
        // cy.wait(5000)
        // cy.get('#lista li span')
        //     .should('contain','Item 2');

        cy.get('#buttonListDOM').click();
        
        // cy.get('#lista li span')
        //     .should('have.length', 1);
        // cy.get('#lista li span',)
        //     .should('have.length', 2);

        cy.get('#lista li span', {timeout: 3000})
            .should('have.length', 1);

    });

    it('Nem todo comando tem Retry', () => {
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '11');
    });

    it.only('Should vs Then', () => {
        cy.get('#buttonListDOM').click();
        
        // O THEN aguarda até que o elemento sejá renderizado sem ficar enviado busca
        // cy.get('#lista li span')
        //     .then(el => {
        //         console.log(el);
        //         expect(el).to.have.length(1);
        //     });
        
        // O Should ele faz a busca e fica fazendo verificação ao longo da espera
        // cy.get('#lista li span')
        //     .should(el => {
        //         console.log(el);
        //         expect(el).to.have.length(1);
        //     });

        // O THEN se você aplicar um RETURN, ele vai retonar o valor informado
        // O SHOULD independente o RETURN ele vai retornar o valor de entrada da função "el"

        
        cy.get('#buttonListDOM')
            .then(el => {
                // console.log(el);
                expect(el).to.have.length(1);
                return 2;
                
            }).and('eq', 2)
            //   .and('not.have.id',2)
    });
})