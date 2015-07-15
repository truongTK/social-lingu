# @Description: This is sign up test feature
# @Author: Toanpp

Feature: Sign up test.

  As a new comer, I want to register for an account using my email and password, so that I can log in and use the application.

  The story above is to set context for the reader. It doesn't actually have any impact on the test
  itself. The phrases inside the scenarios are ties to test code using regex, which you can see in
  /tests/features/step_definitions/steps.js

  In this textual part of the file, you can include context about this feature, you can add links to
  external documents and whatever is needed to create the full specification.

  # The background will be run for every scenario
  Background:
    Given I am a new comer


  @dev
  Scenario: As a new comer.
    When I fill my information with email: "toanpp@twin.vn", password: "123456", confirm: "123456"
    Then I click sign in button
    And I shoud see "Just login"
