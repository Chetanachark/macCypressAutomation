import { Given,when,And,Then, When } from "@badeball/cypress-cucumber-preprocessor";
//import { when } from "cypress/types/jquery";


Given("I open Ecommerce page", () => { 
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
})

When("Start to type your When step here I fill the form",()=>{
    cy.get(':nth-child(1) > .form-control').type("chetanachar") 
    cy.get(".btn").click()

})
// And ("click on submit", ()=> {
//     cy.get(".btn").click()
// })
Then("should show success message",()=> {
    cy.get('.alert').then(function(elememt){
        const messageText = elememt.text()
        expect(messageText.includes("Success")).to.be.true

    })

})