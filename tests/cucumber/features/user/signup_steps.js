/**
*@Description: This file define sign up steps.
*@Author: Toanpp
*/
(function () {

  'use strict';

  var _ = require('underscore');
  var assert = require('assert');

  module.exports = function () {

    var url = require('url');
    this.Given(/^I am a new comer$/, function () {
      return this.server.call('resetUsers');
    });

    this.When(/^I fill my information with email: "([^"]*)", password: "([^"]*)", confirm: "([^"]*)"$/, function (email, pwd, pwdConfirm, callback) {
      this.client
      .url(process.env.ROOT_URL)
      .waitForExist('body *')
      .waitForVisible('body *')
      .setValue('#login-username', email)
      .setValue('#login-password', pwd)
      .setValue('#login-password-again', pwd)

      .call(callback);
    });
    this.Then(/^I click sign in button$/, function (callback) {
      this.client
      .url(process.env.ROOT_URL)
      .waitForExist('body *')
      .waitForVisible('body *')
      .click('#button-sign-up')
      .call(callback);
    });
    this.Then(/^I shoud see "([^"]*)"$/, function (arg1, callback) {
      this.client
      .waitForExist('.justLogin', 5000)
      .getValue('.justLogin').then( function (value) {
        assert.equal(value[0], arg1)})
      .call(callback);
    });


  };
})();
