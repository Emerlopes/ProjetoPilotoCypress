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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('acessarSite', (elemento, texto)=>{
    const url = Cypress.config("baseUrl");
    cy.visit(url);
})

Cypress.Commands.add('digitarCampoTexto', (elemento, texto)=>{
    cy.get(elemento).should('exist').focus().type(texto).should('have.value', texto);
})

Cypress.Commands.add('selecionarValorLista', (elemento, valor)=>{
    cy.get(elemento).should('exist').focus().select(valor);
})

Cypress.Commands.add('selecionarValorRadion', (elemento)=>{
    cy.get(elemento).should('exist').focus().click();
})