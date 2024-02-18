//const { describe } = require("mocha");
//const { before } = require("cypress/types/lodash")
/// <reference types="Cypress" />
//import { data } from "cypress/types/jquery"
import HomePage from "../pageObjects/Home"

describe('myFirst test suite',function()
{
    before(function(){
        cy.fixture('example').then (function(data){
           this.data = data
        })
   })
    it('my first case', function()
    {
    const homePage = new HomePage()
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
    homePage.getEditBox().type(this.data.name)
    homePage.getEmailbox().type(this.data.email)
    homePage.getPwdBox().type(this.data.pwd)
    homePage.getCheckMe().check()
    homePage.getGender().select(this.data.gender)
    homePage.getDateBox().type(this.data.date)
    homePage.getSubmitbutton().click()
    //homePage.getMessage()
    })
})