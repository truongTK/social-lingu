/**
 * @Discription: JavaScript of My Request Screen
 * @Author: TruongTK
 */
Template.showOtherRequest.events({
  "click #btnReply": function(event, template) {
    Session.set("requestIdSelected", event.target.value);
    Router.go('/postAReply');
    return;
  }
});

Template.showOtherRequest.helpers({
  showOtherRequest: function() {
    var showOtherRequest = [];
    otherRequest = Request.find({
      'UserId': {
        $ne: Meteor.userId()
      }
    });
    otherRequest.forEach(function(eachRequest) {
      eachRequest.OutputLanguages.forEach(function(eachRequestLanguage) {
        replies = Reply.find({
          'RequestId': eachRequest._id,
          'OutputLanguage': eachRequestLanguage
        });
        showOtherRequest.push({
          RequestId: eachRequest._id,
          Request: eachRequest.Text,
          InputLanguage: eachRequest.InputLanguage,
          OutputLanguage: eachRequestLanguage,
          Replies: replies
        });
      });
    });
    return showOtherRequest;
  }
});
