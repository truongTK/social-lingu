/**
 * @Discription: JavaScript of My Request Screen
 * @Author: TruongTK
 */
Template.showRequest.onRendered(function() {
  Meteor.call('resetAll');
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
          InputLanguage: eachRequest.InputLanguage,
          OutputLanguage: eachRequestLanguage,
          Replies: replies
        });
      });
    });
    return showMyRequest;
  }
});
