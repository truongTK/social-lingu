/**
 *Discription:
 *  @Author:
*/
var assert = require('assert');

(function() {

  'use strict';

  // You can include npm dependencies for support files in tests/cucumber/package.json
  var _ = require('underscore');

  module.exports = function() {
    this.Given(/^I am a user$/, function(callback) {
      this.client
        .url(process.env.ROOT_URL)
        .waitForExist('body *')
        .waitForVisible('body *').call(callback);
    });

    this.Given(/^Create Test Data$/, function(callback) {
      this.server.call('resetAll');
      this.server.call('myRequestInit');
      this.client.call(callback);
    });

    this.When(/^Want to see all my request$/, function(callback) {
      this.client.call(callback);
    });

    this.Then(/^Open Menu$/, function(callback) {
      this.client
        .click('#btnMenu')
        .call(callback);
    });

    this.Then(/^Click "([^"]*)"$/, function(arg1, callback) {
      if (arg1 == "My Request") {
        this.client
          .waitForExist('#slideout-menu')
          .waitForVisible('#slideout-menu')
          .click('#btnToMyRequest')
          .call(callback);
      }
    });

    this.Then(/^Check Exist Request "([^"]*)" Reply "([^"]*)"$/, function(arg1, arg2, callback) {
      this.client
        .waitForExist('#showRequest')
        .waitForVisible('#showRequest')
        .getText('#request').then(function(text) {
        if (typeof text === 'string') {
          text = [text];
        }
        console.log(text);
        assert.equal(text[0], arg1);
      })
        .getText('#reply').then(function(text) {
        if (typeof text === 'string') {
          text = [text];
        }
        console.log(text);
        assert.equal(text[0], arg2);
      })
        .call(callback);
    });
  }
})();
