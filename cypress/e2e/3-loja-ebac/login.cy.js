///<reference types="cypress"/>

describe(' funcionalidade login' ,() => {

    it('Deve fazer login com sucesso',() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('uliana.paiva@hotmail.com')
        cy.get('#password').type('matteus152030')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, uliana.paiva (não é uliana.paiva? Sair' )
    

    })
})
