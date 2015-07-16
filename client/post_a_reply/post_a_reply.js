/**
 * @Discription: JavaScript to post reply
 * @Author: TruongTK
 */

requestSelected = {};

Template.postAReply.onRendered(function() {});

Template.postAReply.events({
  'submit #newReply': function(event) {
    var text = event.target.textReply.value;
    var outputLang = event.target.outputLang.value;
    var id = requestSelected._id;
    var newReply = {
      UserId: Meteor.userId(),
      RequestId: requestSelected._id,
      Text: text,
      OutputLanguage: outputLang,
      DateCreate: new Date()
    };
    Meteor.call("postNewReply", newReply);
    Router.go("/otherRequest");
    return false;
  }
});

Template.postAReply.helpers({
  requestText: function() {
    requestSelected = Request.findOne({
      _id: Session.get("requestIdSelected")
    });
    return requestSelected.Text;
  },
  listLanguage: function() {
    return Languages.find({
      'key': {
        $in: requestSelected.OutputLanguages
      }
    });
  }
});
