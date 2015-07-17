Feature: SHOW ALL MY REQUEST
  As a USER,
  I want to SEE ALL MY REQUEST of all times
  So that please SHOW ME all my request

  # The background will be run for every scenario
  Background:
    Given I am a user
    And Create Test Data

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  @dev
  Scenario:
    When Want to see all my request
    Then Open Menu
    And  Click "My Request"
    And  Check Exist My Request "Tìm kiếm" Reply "Search"
