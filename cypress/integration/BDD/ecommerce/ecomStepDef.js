//import cy from "cypress";
import { Given,when,And,Then, When } from "@badeball/cypress-cucumber-preprocessor";
//import { when } from "cypress/types/jquery";


import HomePage from "../../pageObjects/Home";
//import { data } from "cypress/types/jquery";
const homePage = new HomePage()
before(function(){
    cy.fixture('example').then (function(data){
       this.data = data
    })
})  
Given("I open Ecommerce page", () => { 
    cy.visit("https://rahulshettyacademy.com/angularpractice/")

})

When("Start to type your When step here I fill the form",function(){
    // cy.log("Received dataTable:", dataTable);
    // cy.log("Raw Table:", dataTable.raw());


    homePage.getEditBox().type(this.data.name)
    homePage.getEmailbox().type(this.data.email)
    homePage.getPwdBox().type(this.data.pwd)
    homePage.getCheckMe().check()
    homePage.getGender().select(this.data.gender)
    homePage.getDateBox().type(this.data.date)
    homePage.getSubmitbutton().click()

})
// And ("click on submit", ()=> {
//     cy.get(".btn").click()
// })
Then("should show success message",()=> {
    homePage.getMessage().then(function(elememt){
        const messageText = elememt.text()
        expect(messageText.includes("Success")).to.be.true

    })

})