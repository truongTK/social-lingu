// @Description: This file define login functions
// @Author: Toanpp

var isFirstLogin = function() {
  var userId = Meteor.userId();
  var lstUserProfile = UserInfo.find({
    UserId: userId
  }).fetch();
  if (lstUserProfile && lstUserProfile.length > 0) {

    return false;
  }
  return true;
};

Meteor.subscribe("users");
Template.loginTemplate.events({
  'click #btn-login': function(event) {
    var email = $('#login-username').val();
    var pwd = $('#login-password').val();
    Meteor.loginWithPassword(email, pwd, function(err, res) {
      if (err) {
        var strError = err.message.replace("Error: ", "").replace("[403]", "");
        $('div[id="errorMessage"]').text(strError);
      } else {
        console.log(isFirstLogin());
        if (isFirstLogin()) {
          Router.go('/profile');
        }
      }
    });
  },

  "click .logout": function(event) {
    event.preventDefault();
    Meteor.logout();
  },
  'click #btn-fblogin': function(event) {
    Meteor.loginWithFacebook(function(err, res) {
      if (err) {
        var strError = err.message.replace("Error: ", "").replace("[403]", "");
        $('div[id="errorMessage"]').text(strError);
      } else {
        console.log(isFirstLogin());
        if (isFirstLogin()) {
          Router.go('/profile');
        }
      }
    });
  },
  'click #btn-gglogin': function(event) {
    Meteor.loginWithGoogle(function(err, res) {
      if (err) {
        var strError = err.message.replace("Error: ", "").replace("[403]", "");
        $('div[id="errorMessage"]').text(strError);
      } else {
        console.log(isFirstLogin());
        if (isFirstLogin()) {
          Router.go('/profile');
        }
      }
    });
  }
});
