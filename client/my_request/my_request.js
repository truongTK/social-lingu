/**
 * @Discription: JavaScript of My Request Screen
 * @Author: TruongTK
 */
Template.showRequest.onRendered(function() {
  Meteor.call('resetAll');
  Meteor.call('myRequestInit', function(error, result) {
    if (error) {
    // handle error
    } else {
      // examine result
    }
  });
  return;
});

Template.showRequest.helpers({
  myRequest: function() {
    return Request.find({});
  }
});

Template.showRequest.events({
  'click button': function() {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
  }
});
