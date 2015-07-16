/**
* @Discription: Make a mock request to test
* @Author: TruongTK
*/

Meteor.methods({
  InitMockDatabase: function(userId) {
    UserInfo.insert({
      UserId: userId,
      StudyLanguages: ["en"],
      FluentLanguages: ["vi"]
    });
    UserInfo.insert({
      UserId: "OtherUser",
      StudyLanguages: ["en"],
      FluentLanguages: ["fr"]
    });

    R1 = Request.insert({
      UserId: userId,
      Text: "Tìm kiếm",
      InputLanguage: "vi",
      OutputLanguages: ["en", "fr"],
      DateCreate: new Date()
    });
    R2 = Request.insert({
      UserId: userId,
      Text: "Try Harder",
      InputLanguage: "en",
      OutputLanguages: ["vi"],
      DateCreate: new Date()
    });
    R3 = Request.insert({
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
      UserId: userId,
      RequestId: R3,
      Text: "I Love you",
      OutputLanguage: "en",
      DateCreate: new Date()
    });
  }
});
