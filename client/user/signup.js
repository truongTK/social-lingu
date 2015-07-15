Meteor.subscribe("users");
var trimInput = function(val) {
  return val.replace(/^\s*|\s*$/g, "");
};
var isValidPassword = function(val) {
  return val.length >= 6 ? true : false;
};
Template.body.helpers({
  isLogin: function() {
    if (Meteor.userId()) {
      return true;
    }
    return false;
  }
});

Template.signupTemplate.events({
  "click #button-sign-up": function(event) {
    var email = $('#login-username').val();
    email = trimInput(email);
    var pwd = $('#login-password').val();
    var pwdConfirm = $('#login-password-again').val();
    if (isValidPassword(pwd)) {
      Accounts.createUser({
        email: email,
        password: pwd
      });
      Router.go('/');
    }
  },

  "click .logout": function(event) {
    event.preventDefault();
    Meteor.logout();
  }
});
