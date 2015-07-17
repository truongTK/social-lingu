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
    'InitMockDatabaseTest': function() {
      var R1 = Request.insert({
        UserId: thisUserId,
        Text: "Tìm kiếm",
        InputLanguage: "vi",
        OutputLanguages: ["en", "fr"],
        DateCreate: new Date()
      });
      var R2 = Request.insert({
        UserId: thisUserId,
        Text: "Try Harder",
        InputLanguage: "en",
        OutputLanguages: ["vi"],
        DateCreate: new Date()
      });
      var R3 = Request.insert({
        UserId: "OtherUser",
        Text: "J'aime beaucoup",
        InputLanguage: "fr",
        OutputLanguages: ["en"],
        DateCreate: new Date()
      });
      Reply.insert({
        UserId: "OtherUser",
        RequestId: R1,
        Text: "Search",
        OutputLanguage: "en",
        DateCreate: new Date()
      });
      Reply.insert({
        UserId: "OtherUser",
        RequestId: R1,
        Text: "Rechercher",
        OutputLanguage: "fr",
        DateCreate: new Date()
      });
      Reply.insert({
        UserId: "OtherUser",
        RequestId: R2,
        Text: "Mạnh nữa lên",
        OutputLanguage: "vi",
        DateCreate: new Date()
      });
      Reply.insert({
        UserId: "OtherUser",
        RequestId: R2,
        Text: "Cố lên nào",
        OutputLanguage: "vi",
        DateCreate: new Date()
      });
      Reply.insert({
        UserId: thisUserId,
        RequestId: R3,
        Text: "I Love you",
        OutputLanguage: "en",
        DateCreate: new Date()
      });
    }
  });
})();
