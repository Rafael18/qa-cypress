/// <reference types="cypress" />
 
describe('Helpers - Facilitadores do dia a dia...', () => {
    
    it('Wrap', () => {
        const obj = {nome: 'User', idade: 20};
        expect(obj).to.have.property('nome');
        
        // A constante OBJ não possui should, pois são do Cupress, 
        // então precisa usar o wrap para permitir essa ação
        // obj.should('have.property', 'nome');
        cy.wrap(obj).should('have.property', 'nome');
        
        cy.visit('https://wcaquino.me/cypress/componentes.html');

        // cy.get('#formNome').type('funcional');
        // cy.get('#formNome').then(el => {
        //     // el.val('funciona??');
        //     cy.wrap(el).type('funciona via cypress');
        // });

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        });
        
        cy.get('#buttonSimple').then(() =>{
            console.log('Encontrei o primeiro botão');
        });

        // Para controlar a promise via Cypress é preciso usar o wrap
        // promise.then(num => console.log(num));
        cy.wrap(promise).then(returno => console.log(returno));
        cy.get('#buttonList').then(() =>{
            console.log('Encontrei o segundo botão');
        });

        cy.wrap(1).then(num => {
            return 2;
        }).should('be.equal',2)
    });

    it('Its...', () => {
        const obj = {nome: 'Rafael', idade: 20};
        
        cy.wrap(obj).should('have.property', 'nome', 'Rafael');
        cy.wrap(obj).its('nome').should('be.equal', 'Rafael');

        const objDois = {nome: 'Rafael', idade: 20, endereco: {rua: 'dos crentes'}};
        cy.wrap(objDois).its('endereco').should('have.property', 'rua');
        cy.wrap(objDois).its('endereco').its('rua').should('contain', 'crentes');
        cy.wrap(objDois).its('endereco.rua').should('contain', 'crentes');

        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.title().its('length').should('be.equal', 20);

    });

    it('Invoke...', () => {
        const getValue = () => 1;
        const soma = (a,b) => a+b;

        cy.wrap({fn: getValue}).invoke('fn')
        .should('be.equal',1);
        
        cy.wrap({fn: soma}).invoke('fn', 2, 5)
        .should('be.equal',7);
        
        cy.visit('https://wcaquino.me/cypress/componentes.html');

        cy.get('#formNome').invoke('val', 'Texto via invoke');

        cy.get('#resultado')
            .invoke('html', '<input type="buttom", value="Hackeado" />');
    });

    it.only('Window...', () => {
        // Executar js na página html
        cy.window().invoke('alert','Da pra ver?')
    });

});