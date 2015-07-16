Template.profileTemplate.helpers({
  isLogin: function() {
    if (Meteor.userId()) {
      return true;
    }
    return false;
  }
});
