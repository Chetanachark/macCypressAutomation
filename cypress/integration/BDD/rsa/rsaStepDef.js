import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pageObjects/rsaLogin";
import HomePage from "../../pageObjects/rsaHome";
import cartPage from "../../pageObjects/rsaCart";
import paymentPage from "../../pageObjects/rsaPayment";
import { eq, forEach } from "lodash";
import { func } from "assert-plus";
//import { when } from "cypress/types/jquery";
//import { when } from "cypress/types/jquery";

const login = new loginPage();
const home = new HomePage();
const cart = new cartPage();
const payment = new paymentPage();

before(function(){
    cy.fixture('rsaTestData').then (function(data){
       this.data = data
    })
})   

Given("user visit rsaclient portal",function(){
    cy.visit("https://rahulshettyacademy.com/client")
    
})

When("userName password",function(){
    login.getMailBox().type(this.data.email)
    login.getPasswordbox().type(this.data.password)
    login.getLoginButton().click()
})

Then("user see automation logo",function(){
    home.getLogo().should('contain','Automation')
    
})

//add item to cart

When("User adds items to cart and verifyies added message",function(){
    this.data.shopItem.forEach(function(elememt){
      
        cy.selectProducts(elememt)
        
    })
    home.getAddedBanner().should('contain','Added')
})

Then("user see added items in cart and check the total sum", function(){
    home.getCartButton().click()
    this.data.shopItem.forEach(function(element){
      cart.getCartItems().should('contain', element);
   
   })

    var totalSum = 0;  // Initialize a variable to store the total sum
    cart.getEachcartItemPrice().each(($el, index, list) => {
        let itemPrice = parseInt($el.text().trim().replace('$', ' ')); // Assuming the price is in a format like "$10.00"
        if (!isNaN(itemPrice)) {
            totalSum += itemPrice;  // Add the parsed price to the total sum
        }
    });

    cart.getTotalCartPrice().then(function(Value){
        //cy.log(Value)
        let totalValue = parseFloat(Value.text().trim().replace('$',''));
        expect(totalSum).to.equal(totalValue)
    })
    cart.getCheckOutButton().click()
    payment.getPageTitle().eq(0).should('contain','Payment Method')
});