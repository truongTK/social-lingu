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
    Request.insert({
      UserId: "Truong",
      Text: "Sao",
      InputLanguage: "Vietnamese",
      OutputLanguages: ["English"],
      DateCreate: new Date()
    });
    Request.insert({
      UserId: "Truong",
      Text: "Try Harder",
      InputLanguage: "English",
      OutputLanguages: ["French"],
      DateCreate: new Date()
    });
    return;
  }
});
