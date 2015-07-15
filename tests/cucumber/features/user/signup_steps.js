/**
*@Description: This file define sign up steps.
*@Author: Toanpp
*/
(function() {

  'use strict';

  var _ = require('underscore');
  var assert = require('assert');

  module.exports = function() {

    var url = require('url');
    this.Given(/^I am a new comer$/, function(callback) {
      this.server.call('resetUsers');
      this.client
        .url(process.env.ROOT_URL)
        .waitForExist('body *')
        .waitForVisible('body *')
        .click('#linkSignUp')
        .call(callback);
    });
    this.When(/^I fill my information with email: "([^"]*)", password: "([^"]*)", confirm: "([^"]*)"$/, function(email, pwd, pwdConfirm, callback) {
      this.client
        .setValue('#login-username', email)
        .setValue('#login-password', pwd)
        .setValue('#login-password-again', pwd)

        .call(callback);
    });

    this.Then(/^I click Create account button$/, function(callback) {
      this.client
        .click('#button-sign-up')
        .call(callback);
    });
    this.Then(/^I shoud see Home page$/, function(callback) {
      this.client
        .waitForExist('.navbar-text', 5000)
        .getText('.navbar-text').then(function(text) {
        assert.equal(text[0], "Home")
      })
        .call(callback);
    });


  };
})();
