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
    this.When(/^Want to see my request "([^"]*)" "([^"]*)" "([^"]*)"$/, function(arg1, arg2, arg3, callback) {
      this.server.call('addNewRequest', arg1, arg2, arg3);
      this.client.call(callback);
    });

    this.Then(/^Check Exist My Request "([^"]*)" Reply "([^"]*)"$/, function(arg1, arg2, callback) {
      this.client
        .waitForExist('#showRequest')
        .waitForVisible('#showRequest')
        .getText('#request').then(function(text) {
        if (typeof text === 'string') {
          text = [text];
        }
        console.log(text);
        assert.equal(text[0], arg1);
      }).then(function() {
        if (arg2 == "") {
        } else {
          this.client.getText('#reply').then(function(text) {
            if (typeof text === 'string') {
              text = [text];
            }
            console.log(text);
            assert.equal(text[0], arg2);
          })
        }
      }).call(callback);
    });
  }
})();
