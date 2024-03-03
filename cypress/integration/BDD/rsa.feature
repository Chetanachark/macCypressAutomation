Feature: Rahul shetty academy e commerce feature

    Adding items to cart and exporting it yo CSV file
    Scenario: login to Rahul shetty academy e commerce feature
    Given I visit https://rahulshettyacademy.com/client/auth/login url
    When I provide credentials and hit on login
    Then should show home page
    