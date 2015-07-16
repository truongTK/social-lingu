/**
 * @Discription: JavaScript of My Request Screen
 * @Author: HungHH
 */
Template.homeTemplate.events({
  "click #btnReply": function(event, template) {
    Session.set("requestIdSelected", event.target.value);
    Router.go('/postAReply');
    return;
  }
});

Template.homeTemplate.helpers({
  showOtherRequest: function() {
    var showOtherRequest = [];
    otherRequest = Request.find({
      'UserId': {
        $ne: Meteor.userId()
      }
    }, {
      sort: {
        'DateCreate': -1
      },
      limit: 5
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

/**
 * @Discription: JavaScript of My Request Screen
 * @Author: HungHH
 */

Template.homeTemplate.helpers({
  showMyRequest: function() {
    var showMyRequest = [];
    // This line must be changed when integration
    myRequest = Request.find({
      'UserId': Meteor.userId()
    }, {
      sort: {
        'DateCreate': -1
      },
      limit: 5
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
