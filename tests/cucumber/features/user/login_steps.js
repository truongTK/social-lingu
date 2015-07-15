/**
*@Description: This file define login steps.
*@Author: Toanpp
*/
(function() {

  'use strict';

  var _ = require('underscore');
  var assert = require('assert');

  module.exports = function() {
    this.Given(/^I am an user$/, function(callback) {
      this.client
        .url(process.env.ROOT_URL)
        .waitForExist('body *')
        .waitForVisible('body *')
        .click('#btnMenu')
        .click('#btnLogout')
        .call(callback);
    });

    this.When(/^I fill my information with email: "([^"]*)", password: "([^"]*)"$/, function(email, pwd, callback) {
      this.client
        .setValue('#login-username', email)
        .setValue('#login-password', pwd)
        .call(callback);
    });

    this.Then(/^I click Login button$/, function(callback) {
      this.client
        .click('#btn-login')
        .call(callback);
    });
  };
})();
