/**
 * @Discription: JavaScript of My Request Screen
 * @Author: TruongTK
 */

Template.showRequest.helpers({
  showMyRequest: function() {
    var showMyRequest = [];
    // This line must be changed when integration
    userId = 'Truong';
    myRequest = Request.find({
      'UserId': userId
    }).fetch();
    for (i = 0; i < myRequest.length; i++) {
      for (j = 0; j < myRequest[i].OutputLanguages.length; j++) {
        replyToMe = Reply.find({
          'RequestId': myRequest[i].id,
          'OutputLanguage': myRequest[i].OutputLanguages[j]
        }).fetch();
        showMyRequest.push({
          request: myRequest[i].Text,
          inputLanguage: myRequest[i].InputLanguage,
          outputLanguage: myRequest[i].OutputLanguages[j],
          reply: replyToMe
        });
      }
    }
    return showMyRequest;
  }
});

Template.showRequest.events({
  'click button': function() {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
  }
});
