/**
 * @Discription: JavaScript of My Request Screen
 * @Author: TruongTK
 */
Template.showRequest.onRendered(function() {
  Meteor.call('InitMockDatabase', Meteor.userId());
});

Template.showRequest.helpers({
  showMyRequest: function() {
    var showMyRequest = [];
    // This line must be changed when integration
    userId = 'Truong';
    myRequest = Request.find({
      'UserId': Meteor.userId()
    });
    myRequest.forEach(function(eachRequest) {
      eachRequest.OutputLanguages.forEach(function(eachRequestLanguage) {
        replies = Reply.find({
          'RequestId': eachRequest._id,
          'OutputLanguage': eachRequestLanguage
        });
        showMyRequest.push({
          Request: eachRequest.Text,
          // InputLanguage: Languages.findOne({
          //   key: eachRequest.InputLanguage
          // }).text,
          // OutputLanguage: Languages.findOne({
          //   key: eachRequestLanguage
          // }).text,
          InputLanguage: eachRequest.InputLanguage,
          OutputLanguage: eachRequestLanguage,
          Replies: replies
        });
      });
    });
    return showMyRequest;
  }
});
