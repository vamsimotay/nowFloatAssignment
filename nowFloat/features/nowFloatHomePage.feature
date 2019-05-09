@Testing
Feature: Now Float Service Selection Functionality

  Scenario Outline: Verify User is able to Select Service From Home Page successfully 
  	Given I am on Now Float Home Page
    When I click Services link from home page
    Then I verify list of services are displayed
    And I click any "<Services>" from dropdown list
    And I verify selected service is displayed
    
    Examples: 
    |Services|
    |classic|
    
    
  Scenario Outline: Verify user is able o select service from Service Overlay
    Given I am on Now Float Home Page
    When I Mouse Over on Services link from home page
    Then I click any "<Services>" from overlay
  
    
Examples: 
    |Services|
    |Classic|
    