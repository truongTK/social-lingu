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

    this.Then(/^I shoud see "([^"]*)"$/, function(email, callback) {
      this.client
        .waitForExist('#linkProfile', 5000)
        .getText('#linkProfile').then(function(text) {
        if (typeof text === 'string') {
          text = [text];
        }
        console.log(text);
        assert.equal(text[0], email);
      })
        .call(callback);
    });

    this.When(/^I click Google link$/, function(callback) {
      this.client
        .click('#btn-gglogin')
        .call(callback);
    });

    this.Then(/^I should see Home page$/, function(callback) {

      this.client
        .waitForExist('#linkProfile', 5000)
        .call(callback);
    });

    this.When(/^I click Facebook link$/, function(callback) {
      this.client
        .click('#btn-fblogin')
        .call(callback);
    });

  };
})();
