

Template.postNewRequest.onRendered(function() {
  $('#outputLang').selectpicker('refresh');
});

Template.postNewRequest.events({
  'submit .newRequest': function(event) {
    var text = event.target.textRequest.value;
  }
});

Template.postNewRequest.helpers({
  listLanguage: function() {
    $('#outputLang').selectpicker('mobile');
    return Languages.find({});
  }
});
