import { Given, when, Then } from "@badeball/cypress-cucumber-preprocessor";
import login from "../../pageObjects/rsaLogin";
import rsaHome from "../../pageObjects/rsaHome";
//import { should } from "chai";
const Login = new login();
const homepage = new rsaHome();
before(function(){
    cy.fixture("rsafixture").then(function(data){
        this.data = this.data;
    })
})
//Given I visit https://rahulshettyacademy.com/client/auth/login url
Given("I visit https://rahulshettyacademy.com/client/auth/login url",()=>{
    cy.visit("https://rahulshettyacademy.com/client/auth/login")
})

when(" When I provide credentials and hit on login", ()=>{
    Login.getEmailBox().type(this.data.email)
    Login.getPasswardBox().type(this.data.password)
    Login.getLoginButton().click()
})
//Then should show home page
    
Then("should show home page",()=>{
    homepage.getPageTitle().text().should('have,value','Automation Practice')

})