/**
 * @Discription: JavaScript of My Request Screen
 * @Author: TruongTK
 */
Template.showRequest.onRendered(function() {
  // Meteor.call('InitMockDatabase', Meteor.userId());
});

// InputLanguage: Languages.findOne({
//   key: eachRequest.InputLanguage
// }).text,
// OutputLanguage: Languages.findOne({
//   key: eachRequestLanguage
// }).text,
Template.showRequest.helpers({
  showMyRequest: function() {
    var showMyRequest = [];
    // This line must be changed when integration
    userId = 'Truong';
    myRequest = Request.find({
      'UserId': Meteor.userId()
    });
    myRequest.forEach(function(eachRequest) {
      replies = Reply.find({
        'RequestId': eachRequest._id
      });
      showMyRequest.push({
        Request: eachRequest.Text,
        InputLanguage: eachRequest.InputLanguage,
        Replies: replies
      });
    });
    return showMyRequest;
  }
});
