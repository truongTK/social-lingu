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
    this.When(/^Want to post a request$/, function(callback) {
      this.client.call(callback);
    });

    this.Then(/^Input "([^"]*)"$/, function(arg1, callback) {
      this.client
        .waitForExist('#textRequest')
        .waitForVisible('#textRequest')
        .setValue('#textRequest', arg1)
        .call(callback);
    });

    this.Then(/^Select input language "([^"]*)"$/, function(arg1, callback) {
      // Write code here that turns the phrase above into concrete actions
      this.client
        .selectByVisibleText('#inputLang', arg1)
        .call(callback);
    });

    this.Then(/^select output language with index "([^"]*)" and "([^"]*)"$/, function(arg1, arg2, callback) {
      this.client
        // .click('[data-id=outputLang]')
        // .waitForVisible('.dropdown-menu')
        .click('#testbtn')
        .click('button.dropdown-toggle')
        .waitForVisible('div.dropdown-menu')
        .element('ul.dropdown-menu li:nth-Child(1) a').click('a')
        .call(callback);
    });

    this.Then(/^Click Submit$/, function(callback) {
      // Write code here that turns the phrase above into concrete actions
      this.client
        .click('#btnPostNewRequest')
        .call(callback);
    });
  }
})();
