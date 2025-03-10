/// <reference types="cypress" />

import loc from '../../../support/locators';
import '../../../support/commandsContas';
 
describe('Should test at a functional level', () => {
    before('RESET CONTAS', () => {
        cy.visit('https://barrigareact.wcaquino.me');
        cy.command_removeSession();
        cy.command_login();
        cy.command_reset();
    });

    it('Should create an account',() => {
        cy.acessarMenuConta();
        cy.inserirConta('Rafael teste');
        cy.get(loc.MESSAGE)
            .should('contain', 'Conta inserida com sucesso');
    });

    it('Should update an account',() => {
        cy.acessarMenuConta();

        cy.xpath(loc.CONTAS.FN_XP_BTN_ALTERAR('Rafael teste')).click();
        
        cy.get(loc.CONTAS.NOME)
        .clear()
        .type('Rafael - Conta alterada');

        cy.get(loc.CONTAS.BTN_SALVAR).click();

        cy.get(loc.MESSAGE)
            .should('contain', 'Conta atualizada com sucesso');
    });

    it('Should not created an account whith same name',() => {
        cy.acessarMenuConta();
        cy.inserirConta('Rafael - Conta alterada');
        cy.get(loc.MESSAGE)
            .should('contain', 'code 400');
    });

    it('Should create a transaction', () => {
        cy.get(loc.MENU.MOVIMENTACAO).click();
        
        cy.get(loc.MOVIMETACAO.DESCRICAO).type('Qualquer coisa...');
        cy.get(loc.MOVIMETACAO.VALOR).type('123');
        cy.get(loc.MOVIMETACAO.INTERESSADO).type('Inter');
        cy.get(loc.MOVIMETACAO.CONTA).select('Rafael - Conta alterada');
        cy.get(loc.MOVIMETACAO.STATUS).click();
        cy.get(loc.MOVIMETACAO.BTN_SALVAR).click();
        cy.get(loc.MESSAGE)
            .should('contain','sucesso');
        cy.xpath(loc.EXTRATO.FN_XP_BUSCA_ELEMENTO('Qualquer coisa...','123')).should('exist');
    });

    it('Should get balance', () => {
        cy.get(loc.MENU.HOME).click();
        cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta alterada')).should('contain', '123')

    });

    it('Should remove a transaction', () => {
        cy.get(loc.MENU.EXTRATO).click();
        cy.xpath(loc.EXTRATO.FN_XP_REMOVER_ELEMENTO('Qualquer coisa...')).click();
        cy.get(loc.MESSAGE)
            .should('contain','sucesso');
    });

    after('Should destroyd localstore', () => {
        cy.command_removeSession();
    });
});