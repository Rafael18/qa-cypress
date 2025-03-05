/// <reference types="cypress" />
describe('Iframe via Cypress', () => {
    
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.reload();      
    });

    // Iframe e Popup devem ser testado em duas etapas 
    it('Popup -> Deve testar PopUp diretamente', () =>{
        // cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.window().then(win => {
            cy.stub(win, 'open').as('winOpen')
        });
        
        cy.get('#buttonPopUp').click();
        cy.get('@winOpen').should('be.called')
    });

    it('Popup -> Acessando via link', () =>{
        cy.contains('Popup2')
            .should('have.prop', 'href')
            .and('equal','https://wcaquino.me/cypress/frame.html')
    });

    it('Popup -> Acessando dynamicamente', () =>{
        cy.contains('Popup2').then( $a => {
            const href = $a.prop('href');
            cy.visit(href);
            cy.get('#tfield').type('Ai deu bom!!!')
        });
       
    });

    it('Popup -> Fazendo o popup abrir na mesma página', () =>{
        cy.contains('Popup2')
            .invoke('removeAttr', 'target')
            .click();
        
        cy.get('#tfield').type('Ai deu bom!!!');
    });
})