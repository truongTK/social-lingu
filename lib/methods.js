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
      StudyLanguages: ["en"],
      FluentLanguages: ["vi"]
    });
    UserInfo.insert({
      UserId: "OtherUser",
      StudyLanguages: ["en"],
      FluentLanguages: ["fr"]
    });
    Request.insert({
      id: "Tìm Kiếm",
      UserId: "Truong",
      Text: "Tìm kiếm",
      InputLanguage: "vi",
      OutputLanguages: ["en", "fr"],
      DateCreate: new Date()
    });
    Request.insert({
      id: "Try Harder",
      UserId: "Truong",
      Text: "Try Harder",
      InputLanguage: "en",
      OutputLanguages: ["vi"],
      DateCreate: new Date()
    });
    Request.insert({
      id: "J'aime beaucoup",
      UserId: "OtherUser",
      Text: "J'aime beaucoup",
      InputLanguage: "fr",
      OutputLanguages: ["en"],
      DateCreate: new Date()
    });

    Reply.insert({
      UserId: "OtherUser",
      RequestId: "Tìm Kiếm",
      Text: "Search",
      OutputLanguage: "en",
      DateCreate: new Date()
    });
    Reply.insert({
      UserId: "OtherUser",
      RequestId: "Tìm Kiếm",
      Text: "Rechercher",
      OutputLanguage: "fr",
      DateCreate: new Date()
    });
    Reply.insert({
      UserId: "OtherUser",
      RequestId: "Try Harder",
      Text: "Mạnh nữa lên",
      OutputLanguage: "vi",
      DateCreate: new Date()
    });
    Reply.insert({
      UserId: "OtherUser",
      RequestId: "Try Harder",
      Text: "Cố lên nào",
      OutputLanguage: "vi",
      DateCreate: new Date()
    });
    Reply.insert({
      UserId: "Truong",
      RequestId: "J'aime beaucoup",
      Text: "I Love you",
      OutputLanguage: "en",
      DateCreate: new Date()
    });
  }
});
