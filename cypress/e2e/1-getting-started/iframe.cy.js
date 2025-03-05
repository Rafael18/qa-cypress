/// <reference types="cypress" />
describe('Iframe via Cypress', () => {
    
    // beforeEach(() => {
    //     cy.visit('https://wcaquino.me/cypress/componentes.html');
    //     cy.reload();      
    // });

    it('iframe -> Testando através da página principal', () =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.get('#frame1').then(iframe => {
            const body = iframe.contents().find('body');
            cy.wrap(body).find('#tfield')
                .type('Funciona?')
                .should('have.value', 'Funciona?')
        })
    });

    it.only('iframe -> Testando direto no frame', () =>{
        cy.visit('https://wcaquino.me/cypress/frame.html');
        cy.get('#otherButton').click();

        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Click OK!');
        })
    });
})