

Template.postNewRequest.onRendered(function() {
  $('#outputLang').selectpicker('refresh');
});

Template.postNewRequest.events({
  'submit #newRequest': function(event) {
    var text = event.target.textRequest.value;
    var inputLang = event.target.inputLang.value;
    var outputLang = $('#outputLang').val();
    alert(text + ',' + inputLang + ',' + outputLang);
  }
});

Template.postNewRequest.helpers({
  listLanguage: function() {
    $('#outputLang').selectpicker('mobile');
    $('#outputLang').selectpicker('render');
    return Languages.find({});
  }
});
