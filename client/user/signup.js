Meteor.subscribe("users");
Template.body.helpers({
  isLogin: function () {
    if(Meteor.userId())
    {
      return true;
    }
    return false;
  }
});
Template.signupTemplate.events({
  "click #button-sign-up": function (event) {
  }
});
Template.signupTemplate.helpers({

});
