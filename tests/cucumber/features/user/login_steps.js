/**
*@Description: This file define sign up steps.
*@Author: Toanpp
*/
(function() {

  'use strict';

  var _ = require('underscore');
  var assert = require('assert');

  module.exports = function() {
    this.Given(/^I am an user$/, function(callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.When(/^I fill my information with email: "([^"]*)", password: "([^"]*)"$/, function(arg1, arg2, callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.Then(/^I click Login button$/, function(callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });
  };
})();
