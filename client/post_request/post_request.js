

Template.postNewRequest.onRendered(function() {
  $('#outputLang').selectpicker('render');
  setTimeout(function() {
    $('#outputLang').selectpicker('refresh');
  }, 500);
});

Template.postNewRequest.events({
  'submit #newRequest': function(event) {
    var text = event.target.textRequest.value;
    var inputLang = event.target.inputLang.value;
    var outputLang = $('#outputLang').val();
    var newRequestObj = {
      Text: text,
      InputLanguage: inputLang,
      OuputLanguages: outputLang
    };
    Meteor.call("postNewRequest", newRequestObj);
    Router.go("/");
    return false;
  }
});

Template.postNewRequest.helpers({
  listLanguage: function() {
    $('#outputLang').selectpicker('mobile');
    return Languages.find({});
  }
});
