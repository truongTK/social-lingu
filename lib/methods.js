/**
 * @Discription: Base methods of this project
 *   Declare methods which be used in all task
 * @Author: TruongTK
 */

Meteor.methods({
  isUser: function() {
    return true;
  },
  resetAll: function() {
    UserInfo.remove({});
    Languages.remove({});
    Request.remove({});
    Reply.remove({});
    Rating.remove({});
    return;
  },
  InitMockDatabase: function() {
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
      id: "J'aime beaucoup",
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
