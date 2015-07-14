/**
*@Description: This file define sign up steps.
*/
(function () {

  'use strict';

  var _ = require('underscore');
  var assert = require('assert');

  module.exports = function () {

    var url = require('url');
    this.Given(/^I am a new comer$/, function () {
      return this.server.call('resetUser');
    });

  };
})();
