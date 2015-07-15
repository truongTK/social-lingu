

Template.postNewRequest.onRendered(function() {
  $('.selectpicker').selectpicker();
});

Template.postNewRequest.events({
  'submit .newRequest': function(event) {
    var text = event.target.textRequest.value;

  }
});

Template.postNewRequest.helpers({
  listLanguage: function() {
    return Languages.find({});
  }
});
