/**
 *Discription: Common Step here
 *  @Author: TruongTK
*/

var assert = require('assert');

(function() {

  'use strict';

  // You can include npm dependencies for support files in tests/cucumber/package.json
  var _ = require('underscore');

  module.exports = function() {

    this.Given(/^I have login "([^"]*)"$/, function(arg1, callback) {
      this.server.call('resetUsers');
      this.server.call('createMockUser', arg1);
      this.client
        .url(process.env.ROOT_URL)
        .waitForExist('body *')
        .waitForVisible('body *')
        .setValue('#login-username', arg1)
        .setValue('#login-password', "123456")
        .click('#btn-login')
        .waitForExist('#linkProfile', 5000)
        .getText('#linkProfile').then(function(text) {
        if (typeof text === 'string') {
          text = [text];
        }
        console.log(text);
        assert.equal(text[0], arg1);
      })
        .call(callback);
    });

    this.Then(/^Open Menu$/, function(callback) {
      this.client
        .click('#btnMenu')
        .call(callback);
    });

    this.Then(/^Click "([^"]*)"$/, function(arg1, callback) {
      if (arg1 == "New request") {
        this.client
          .waitForExist('#slideout-menu')
          .waitForVisible('#slideout-menu')
          .click('#btnNewRequest')
          .call(callback);
      }
      if (arg1 == "My Request") {
        this.client
          .waitForExist('#slideout-menu')
          .waitForVisible('#slideout-menu')
          .click('#btnToMyRequest')
          .call(callback);
      }
      if (arg1 == "Other request") {
        this.client
          .waitForExist('#slideout-menu')
          .waitForVisible('#slideout-menu')
          .click('#btnToOtheReqruest')
          .call(callback);
      }
      if (arg1 == "Reply") {
        this.client
          .click('#btnReply')
          .call(callback);
      }
    });
  }
})();
