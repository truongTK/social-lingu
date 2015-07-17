(function() {

  'use strict';

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
    'myRequestInit': function() {
      UserInfo.insert({
        UserId: "Truong",
        StudyLanguages: ["English"],
        FluentLanguages: ["Vietnamese"]
      });
      UserInfo.insert({
        UserId: "OtherUser",
        StudyLanguages: ["English"],
        FluentLanguages: ["French"]
      });
      Request.insert({
        id: "Tìm Kiếm",
        UserId: "Truong",
        Text: "Tìm kiếm",
        InputLanguage: "Vietnamese",
        OutputLanguages: ["English", "French"],
        DateCreate: new Date()
      });
      Request.insert({
        id: "Try Harder",
        UserId: "Truong",
        Text: "Try Harder",
        InputLanguage: "English",
        OutputLanguages: ["Vietnamese"],
        DateCreate: new Date()
      });
      Request.insert({
        id: "Try Harder",
        UserId: "OtherUser",
        Text: "J'aime beaucoup",
        InputLanguage: "French",
        OutputLanguages: ["English"],
        DateCreate: new Date()
      });

      Reply.insert({
        UserId: "OtherUser",
        RequestId: "Tìm Kiếm",
        Text: "Search",
        OutputLanguage: "English",
        DateCreate: new Date()
      });
      Reply.insert({
        UserId: "OtherUser",
        RequestId: "Tìm Kiếm",
        Text: "Rechercher",
        OutputLanguage: "French",
        DateCreate: new Date()
      });
      Reply.insert({
        UserId: "OtherUser",
        RequestId: "Try Harder",
        Text: "Mạnh nữa lên",
        OutputLanguage: "Vietnamese",
        DateCreate: new Date()
      });
      Reply.insert({
        UserId: "OtherUser",
        RequestId: "Try Harder",
        Text: "Cố lên nào",
        OutputLanguage: "Vietnamese",
        DateCreate: new Date()
      });
      Reply.insert({
        UserId: "Truong",
        RequestId: "J'aime beaucoup",
        Text: "I Love you",
        OutputLanguage: "English",
        DateCreate: new Date()
      });

    }


  });
})();
