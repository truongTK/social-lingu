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

    this.Then(/^Check Exist Other User 's Request "([^"]*)" Reply "([^"]*)"$/, function(arg1, arg2, callback) {
      this.client
        .waitForExist('#showOtherRequest')
        .waitForVisible('#showOtherRequest')
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

    this.Then(/^Input Reply "([^"]*)" "([^"]*)"$/, function(arg1, arg2, callback) {
      this.client
        .waitForExist('#newReply')
        .waitForVisible('#newReply')
        .setValue('#textReply', arg1)
        .selectByVisibleText('#outputLang', arg2)
        .call(callback);
    });

    this.Then(/^Submit Reply$/, function(callback) {
      this.client
        .click('#btnPostNewReply')
        .call(callback);
    });

    this.Then(/^Check Exist The Reply "([^"]*)" "([^"]*)" "([^"]*)" in database$/, function(arg1, arg2, arg3, callback) {
      this.server.call('checkReply', arg1, arg2, arg3);
      this.client.call(callback);
    });


  }
})();
