// @Description: This file define sign up functions
// @Author: Toanpp
Meteor.subscribe("users");
var trimInput = function(val) {
  return val.replace(/^\s*|\s*$/g, "");
};
var isValidPassword = function(val) {
  return val.length >= 6 ? true : false;
};
var isValidEmail = function(val) {
  if (val.includes('@') == false) {
    return false;
  }
  if (val.includes('.') == false) {
    return false;
  }
  return true;
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
    //Check confirm password ok.
    if (pwd != pwdConfirm) {
      $('div[id="errorMessage"]').text('Confirm password not match.');
      return;
    }
    //If email and password ok --> Done
    if (isValidPassword(pwd) && isValidEmail(email)) {
      Accounts.createUser({
        email: email,
        password: pwd
      });
      Router.go('/profile');
    } else {
      //Show error if email or password invalid
      if (isValidEmail(email) == false) {
        $('div[id="errorMessage"]').text('Invalid email');
      }
      if (isValidPassword(pwd) == false) {
        $('div[id="errorMessage"]').text('Password must be more than 6 charactors');
      }
    }
  },
  "click .logout": function(event) {
    event.preventDefault();
    Meteor.logout();
  }
});
