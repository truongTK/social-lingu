# Description: This is login test feature
# Author: Toanpp
Feature: Login test
  As a user
  I want to login with my account and password or login with my Facebook/Google account
  so that I can log in and use the application.

  # The background will be run for every scenario
  Background:
    Given I am an user

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  @dev
  Scenario: As an user, I have an account and password
    When I fill my information with email: "toanpp@twin.vn", password: "123456"
    Then I click Login button
    And I shoud see "toanpp@twin.vn"

  @dev
  Scenario: As new comer, I have a Google account
    When I click Google link
    Then I should see Home page

  @dev
  Scenario: As new comer, I have a Facebook account
    When I click Facebook link
    Then I should see Home page
