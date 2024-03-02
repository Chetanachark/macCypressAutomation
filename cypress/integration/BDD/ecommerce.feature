Feature: Ecommerce E2E vaidation

    Feature testing of Ecommerce
    Scenario: Ecommerce product delivery
    Given I open Ecommerce page
        # | name        | email                   | password | Gender | Date       |
        # | Chetanachar | chetanachar.k@gmail.com | 123      | Male   | 1995/07/05 |
    When Start to type your When step here I fill the form
    Then should show success message
