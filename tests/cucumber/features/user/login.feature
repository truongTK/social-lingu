# Description: This is login test feature
# Author: Toanpp
Feature: Login test
  As a user
  I want to register for an account using my email and password
  so that I can log in and use the application.

  # The background will be run for every scenario
  Background:
    Given I am a new comer

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  @dev
  Scenario:
    When I fill my information with email: "toanpp@twin.vn", password: "123456", confirm: "123456"
    Then I click sign in button
    And I shoud see Home page
