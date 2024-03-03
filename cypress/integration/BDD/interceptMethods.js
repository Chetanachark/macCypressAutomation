const cypress = require("cypress");
//const { get } = require("cypress/types/lodash");

describe("stubbing api responses",function(){
    it("set api response to 1", function(){
        cy.intercept({
            method: 'GET',
            url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        }, {
            statusCode :200,
            body: [{
                "book_name": "RestAssured with Java",
                "isbn": "BSG",
                "aisle": "2302"
            }]
        }).as('bookRetrivals')
        cy.visit("https://rahulshettyacademy.com/angularAppdemo")
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait('@bookRetrivals')


    })
})