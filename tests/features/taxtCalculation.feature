Feature: Tax Calculation
    As a user, I should be able to purchase an item from the store and 
    confirm the tax has been calculated correctly in the total.

Scenario:
    Given I am logged in as a user on the Sauce Demo website
    When I checkout with an item in my cart
    Then I can see tax has been calculated correctly at 8 percent
    And I can see purchase confirmation text
 
    