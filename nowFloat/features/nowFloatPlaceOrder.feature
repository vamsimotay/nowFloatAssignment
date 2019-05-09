@Testing
Feature: Now Float Order Placement Functionality

  Scenario Outline: Verify User is able to Place Order successfully 
  	Given I am on Now Float Home Page
    When I click Services link from home page
    Then I verify list of services are displayed
    And I click any "<Services>" from dropdown list
    And I verify selected service is displayed 
    When I click Add to Bag button
    Then I verify product added to Bag
    When I click shopping bag link
    Then I verify user navigated to shopping bag page
    And I click checkout button
    Then I verify user navigated to checkout page
    And I enter shipping details
    And I click payment options
    And I Place order
    Then I verify Order ID
    
    
    Examples: 
    |Services|
    |classic|