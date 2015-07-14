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

    this.When(/^Want to see all my request$/, function(callback) {
      this.client.call(callback);
    });

    this.Then(/^Open Menu$/, function(callback) {
      this.client.call(callback);
    });

    this.Then(/^Click "([^"]*)"$/, function(arg1, callback) {
      this.client.call(callback);
    });

    this.Then(/^Check Exist "([^"]*)" "([^"]*)"$/, function(arg1, arg2, callback) {
      this.client
        .getText('#request_' + arg1).then(function(text) {
        if (typeof text === 'string') {
          text = [text];
        }
        console.log(text);
        assert.equal(text[0], arg1);
      }).call(callback);
    });

  }
})();
