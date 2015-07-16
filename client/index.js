/**
* @Discription: Base javascript of index
* @Author: TruongTK
* @Update: ToanPP
*/
Meteor.subscribe('userinfo');
Meteor.subscribe('languages');
Meteor.subscribe('request');
Meteor.subscribe('reply');
Meteor.subscribe('rating');

// To store the slideout instance.
var slideout;

// Router configuration
Router.configure({
  layoutTemplate: 'MasterLayout'
});

// Auto-close the menu on route stop (when navigating to a new route)
Router.onStop(function() {
  if (slideout) {
    slideout.close();
  }
});

// Define some routes
Router.route('/', {
  name: 'homeTemplate'
});
Router.route('/myrequest', {
  name: 'showRequest'
});
Router.route('/otherRequest', {
  name: 'showOtherRequest'
});
Router.route('/profile', {
  name: 'profileTemplate'
});
Router.route('/signup', {
  name: 'signupTemplate'
});
Router.route('/login', {
  name: 'loginTemplate'
});
Router.route('/postrequest', {
  name: 'postNewRequest'
});
Router.route('/postAReply', {
  name: 'postAReply'
});

// Setup code for Slideout menu in MasterLayout
Template.MasterLayout.onRendered(function() {
  var template = this;
  slideout = new Slideout({
    'panel': template.$('#content').get(0),
    'menu': template.$('#slideout-menu').get(0),
    'padding': 256,
    'tolerance': 70
  });
});

Template.MasterLayout.events({
  'click #btnMenu': function() {
    // increment the counter when button is clicked
    slideout.toggle();
  },
  'click #btnLogout': function(event) {
    event.preventDefault();
    Meteor.logout();
    Router.go('/');
    slideout.toggle();
  }
});

Template.MasterLayout.helpers({
  'getUserEmail': function() {
    var user = Meteor.user();
    if (user.emails) {
      var email = user.emails;
      return email[0].address;
    }
    return user.profile.name;


  }
});
// Other template code
