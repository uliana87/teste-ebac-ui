///<reference types="cypress"/>

describe(' funcionalidade login' ,() => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso',() => {
        cy.get('#username').type('uliana.paiva@hotmail.com')
        cy.get('#password').type('matteus152030')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, uliana.paiva (não é uliana.paiva? Sair' )
    

    })


it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
    cy.get('#username').type('uli.paiva@hotmail.com')
    cy.get('#password').type('matteus152030')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('exist')   

    
});

it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('uliana.paiva@hotmail.com')
        cy.get('#password').type('152030')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail uliana.paiva@hotmail.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
    
});
})