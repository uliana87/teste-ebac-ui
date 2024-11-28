///<reference types="cypress"/>

describe('Funcionalidade: Produto', () => {

    beforeEach(() => {
        cy.visit('/produtos/')
    });
    it('deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
       // .first()
       //.last()
       //.eq(2)
       .contains('Arcadio Gym Short')
        .click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });
});