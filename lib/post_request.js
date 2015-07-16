Meteor.methods({
  postNewRequest: function(objNewRequest) {
    // Make sure the user is logged in before inserting a request
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    Request.insert({
      Text: objNewRequest.Text,
      InputLanguage: objNewRequest.InputLanguage,
      OutputLanguages: objNewRequest.OuputLanguages,
      UserId: Meteor.userId(),
      DateCreate: new Date(),
      DateUpdate: new Date()
    });
    // Request.insert({
    //   Text: 'starlord',
    //   InputLanguage: 'en',
    //   OuputLanguages: ['ru', 'vi'],
    //   UserId: 'aa',
    //   DateCreate: new Date(),
    //   DateUpdate: new Date()
    // });
  }
});
