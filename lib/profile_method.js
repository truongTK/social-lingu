Meteor.methods({
  updateProfile: function(objUserProfile) {
    UserInfo.upsert(

      {
        UserId: objUserProfile.userId
      },
      {
        $set: {
          UserId: objUserProfile.userId,
          StudyLanguages: objUserProfile.studyLanguage,
          FluentLanguages: objUserProfile.fluentLanguage
        }
      }
    );
  }
});
