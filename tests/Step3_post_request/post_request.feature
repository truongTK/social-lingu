Feature: POST A REQUEST
  As a USER,
  I want to POST A NEW REQUEST
  So that please SHOW ME POST REQUEST SCREEN and ALLOW ME SUBMIT A NEW REQUEST

  # The background will be run for every scenario
  Background:
    Given I am a user
    And Create Test Data

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  @dev
  Scenario:
    When Want to post a request
    Then Open Menu
    And  Click "New request"
    And Input "starlord"
    And Select input language "English"
    And select output language with index "ru" and "vi"
    And Click Submit
    And Check Exist My Request "starlord" Reply ""
