Meteor.subscribe("users");
Template.loginTemplate.events({
  'click #btn-login': function(event) {
    var email = $('#login-username').val();
    var pwd = $('#login-password').val();
    Meteor.loginWithPassword(email, pwd, function(err, res) {
      if (err) console.log("Error: " + err);
    });
    slideout.toggle();
  },

  "click .logout": function(event) {
    event.preventDefault();
    Meteor.logout();
  },
  'click #btn-fblogin': function(event) {
    Meteor.loginWithFacebook();
    slideout.toggle();
  },
  'click #btn-gglogin': function(event) {
    Meteor.loginWithGoogle();
    slideout.toggle();
  }
});
