Meteor.methods({
  createAccount: function (email, password) {
    Meteor.users.insert({
      email: email,
      password: password
    });
  }
});
