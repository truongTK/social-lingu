/**
 *Discription:
 *  @Author: TruongTK
*/
var assert = require('assert');

(function() {

  'use strict';

  // You can include npm dependencies for support files in tests/cucumber/package.json
  var _ = require('underscore');

  module.exports = function() {
    this.When(/^Want to reply a request$/, function(callback) {
      this.client.call(callback);
    });

    this.Then(/^Check Other Exist Request "([^"]*)" Reply "([^"]*)"$/, function(arg1, arg2, callback) {
      this.client
        .waitForExist('#showOtherRequest')
        .waitForVisible('#showOtherRequest')
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
