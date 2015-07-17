Feature: SHOW ALL OTHER REQUEST TO REPLY
  As a USER,
  I want to SEE ALL OTHER REQUEST of all times
  So that please SHOW ME all other request

  # The background will be run for every scenario
  Background:
    Given I have login "toanpp@twin.vn"

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  @dev
  Scenario:
    When Want to reply a request
    Then Open Menu
    And  Click "Other request"
    And  Check Exist Other User 's Request "This is a request" Reply ""
