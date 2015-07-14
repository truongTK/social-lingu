/**
 * @Discription: methods for My Request Screen
 * @Author: TruongTK
 */

Meteor.methods({
  myRequestInit: function() {
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
      id: "Sao",
      UserId: "Truong",
      Text: "Sao",
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
      RequestId: "Sao",
      Text: "Start",
      OutputLanguage: "English",
      DateCreate: new Date()
    });
    Reply.insert({
      UserId: "OtherUser",
      RequestId: "Sao",
      Text: "étoile",
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

    return;
  }
});
