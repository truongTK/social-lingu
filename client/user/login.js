Meteor.subscribe("users");
Template.loginTemplate.events({
    'click #btn-login': function(event){
      var email = $('#login-username').val();
      var pwd = $('#login-password').val();
      Meteor.loginWithPassword(email,pwd,function(err,res){if (err) console.log("Error: "+err);});
    },

    "click .logout": function(event){
      event.preventDefault();
      Meteor.logout();
    }
});
