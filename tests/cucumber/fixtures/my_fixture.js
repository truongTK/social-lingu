(function () {

  'use strict';

  Meteor.methods({
    'reset' : function() {
    },
    'resetUsers' : function() {
      Meteor.users.remove({});
    }
  });
})();
