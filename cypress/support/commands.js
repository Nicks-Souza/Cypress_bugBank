// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import url from './url'
import login from '../selectors/login.sel.cy'
import  cadastro  from '../selectors/cadastro.sel.cy';
require('cypress-xpath');

Cypress.Commands.add('login', (email, password) => {
    cy.visit(url.login)
    cy.xpath(login.email).first().type(email)
    cy.xpath(login.password).first().type(password)
    cy.xpath(login.buttonLogin).first().click()
})



Cypress.Commands.add('new_user_com_saldo', (email, name, password)=>{
    cy.visit(url.cadastro)
    cy.get(cadastro["pagina-cadastro"].buttonCadastro1).click()
    cy.xpath(cadastro["pagina-cadastro"].email).click({force: true}).type(email)
    cy.xpath(cadastro["pagina-cadastro"].name).click({force: true}).type(name)
    cy.xpath(cadastro["pagina-cadastro"].password).click({force: true}).type(password)
    cy.xpath(cadastro["pagina-cadastro"].confirmPassword).click({force: true}).type(password)
    cy.xpath(cadastro["pagina-cadastro"].saldo).click({force: true})
    cy.xpath(cadastro["pagina-cadastro"].submitButton).click({force: true})
    cy.xpath(cadastro["pagina-cadastro"].panel_success).should('be.visible')
    cy.writeFile('cypress/fixtures/usuarioComSaldo.json', {email, password})
})

Cypress.Commands.add('new_user_sem_saldo', (email, name, password)=>{
    cy.visit(url.cadastro)
    cy.get(cadastro["pagina-cadastro"].buttonCadastro1).click()
    cy.xpath(cadastro["pagina-cadastro"].email).click({force: true}).type(email)
    cy.xpath(cadastro["pagina-cadastro"].name).click({force: true}).type(name)
    cy.xpath(cadastro["pagina-cadastro"].password).click({force: true}).type(password)
    cy.xpath(cadastro["pagina-cadastro"].confirmPassword).click({force: true}).type(password)
    cy.xpath(cadastro["pagina-cadastro"].submitButton).click({force: true})
    cy.xpath(cadastro["pagina-cadastro"].panel_success).should('be.visible')
    cy.writeFile('cypress/fixtures/usuarioSemSaldo.json', {email, password})
})  

Cypress.Commands.add('new_user_com_senha_diferente', (email, name, password, password1)=>{
    cy.visit(url.cadastro)
    cy.get(cadastro["pagina-cadastro"].buttonCadastro1).click()
    cy.xpath(cadastro["pagina-cadastro"].email).click({force: true}).type(email)
    cy.xpath(cadastro["pagina-cadastro"].name).click({force: true}).type(name)
    cy.xpath(cadastro["pagina-cadastro"].password).click({force: true}).type(password)
    cy.xpath(cadastro["pagina-cadastro"].confirmPassword).click({force: true}).type(password1)
    cy.xpath(cadastro["pagina-cadastro"].submitButton).click({force: true})
    cy.xpath(cadastro["pagina-cadastro"].panel_insuccess).should('be.visible')
})  