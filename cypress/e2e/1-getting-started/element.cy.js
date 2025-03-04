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
        cy.get('[data-test=dataEscolaridade] option')
            .should('have.length',8);

        cy.get('[data-test=dataEscolaridade] option')
            .then(arr => {
                const values = [];

                arr.each(function(){
                    values.push(this.innerHTML);
                });
                expect(values).to.include.members(["Superior","Mestrado"])
            });
    });

    it.only('Combobox multiple select', () => {
        cy.get('[data-testid="dataEsportes"]')
            .select(['natacao', 'Corrida','nada']);
        
        // TODO validar as opções selecionadas do combo multiplo

        cy.get('[data-testid="dataEsportes"]')
            .then(el => {
                expect(el.val()).to.be.deep.equal(['natacao','Corrida','nada'])
                expect(el.val()).to.have.length(3)
            });

        cy.get('[data-testid="dataEsportes"]')
            .invoke('val').should('eql',['natacao','Corrida','nada'])
    });
})