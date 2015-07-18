Feature: REPLY A REQUEST
  As a USER,
  I want to REPLY a request
  So that please SHOW ME reply form

  # The background will be run for every scenario
  Background:
    Given I have login "toanpp2@twin.vn"

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  @dev
  Scenario:
    When Want to reply a request
    Then Open Menu
    And  Click "Other request"
    And  Check Exist Other User 's Request "This is a request" Reply ""
    And  Click "Reply"
    And  Input Reply "Đây là câu hỏi" "Vietnamese"
    And  Submit Reply
    And  Check Exist The Reply "This is a request" "Đây là câu hỏi" "vi" in database
