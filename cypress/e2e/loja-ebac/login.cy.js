///<reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe(' funcionalidade login' ,() => {

    beforeEach(() => {
        cy.visit('/minha-conta/')
        
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
it('Deve fazer login com sucesso - Usando massa de dados ', () => {
    cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, uliana.paiva (não é uliana.paiva? Sair' )
    
});
it('Deve fazer login com sucesso - Usando Fixture ', () => {
    cy.fixture('perfil').then(dados=>{
        cy.get('#username').type(dados.usuario,{log: false})
        cy.get('#password').type(dados.senha ,{log: false} )
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, uliana.paiva (não é uliana.paiva? Sair' )
    

    })
})
it.only('Deve fazer login com sucesso - usando Comandos customizado', () => {
    cy.login('uliana@hotmail.com','matteus152030')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, uliana (não é uliana? Sair' )
});
})
