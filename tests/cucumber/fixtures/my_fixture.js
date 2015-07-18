(function() {

  'use strict';
  var trimInput = function(val) {
    return val.replace(/^\s*|\s*$/g, "");
  };
  var thisUserId = {};

  Meteor.methods({
    'resetAll': function() {
      UserInfo.remove({});
      Request.remove({});
      Reply.remove({});
      Rating.remove({});
      return;
    },
    'resetUsers': function() {
      Meteor.users.remove({});
    },
    'logoutAccount': function() {
      Meteor.logout();
    },
    'getUserEmail': function() {
      var user = Meteor.user();
      if (user.emails) {
        var email = user.emails;
        return "Hello - " + email[0].address;
      }
      return "Hello - " + user.profile.name;
    },
    'createMockUser': function(arg1) {
      var email = arg1;
      email = trimInput(email);
      var pwd = "123456";
      var pwdConfirm = "123456";
      //If email and password ok --> Done
      thisUserId = Accounts.createUser({
        email: email,
        password: pwd
      });
      //Router.go('/profile');
    },
    'addNewRequest': function(arg1, arg2, arg3) {
      var text = arg1;
      var inputLang = arg2;
      var outputLang = arg3;
      Request.insert({
        Text: arg1,
        InputLanguage: arg2,
        OutputLanguages: arg3,
        UserId: thisUserId,
        DateCreate: new Date(),
        DateUpdate: new Date()
      });
    },
    'checkReply': function(arg1, arg2, arg3) {
      var count = Reply.find({
        Text: arg2,
        OutputLanguage: arg3
      }).count();
      if (count == '0') {
        console.log('    Fail To Find Reply');
      }
    }
  });
})();
