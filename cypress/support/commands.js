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

//const cypress = require("cypress");

Cypress.Commands.add("selectProducts", (productName) => {
    cy.get(".card b").each(($el, index, $list) => {
        let item = $el.text().trim()
        if(item == productName){
        cy.get(".btn.btn.w-10.rounded").eq(index).click()
        }
     })
})

//Cypress.Commands.add('products',)
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