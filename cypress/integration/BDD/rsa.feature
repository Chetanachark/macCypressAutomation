Feature: RSA client

    e2e automation
    Scenario: login
    Given user visit rsaclient portal
    When userName password
    Then user see automation logo


    When User adds items to cart and verifyies added message
    Then user see added items in cart and check the total sum
    



