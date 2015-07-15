/**
* @Discription: Base javascript of index
* @Author: TruongTK
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
  name: 'loginTemplate' });
Router.route('/signup', {
  name: 'signupTemplate' });

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
      }
    });
    // Other template code
