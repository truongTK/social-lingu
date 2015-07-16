Template.profileTemplate.helpers({
  isLogin: function() {
    if (Meteor.userId()) {
      return true;
    }
    return false;
  },
});
Template.profileTemplate.helpers({
  listStudyLanguage: function() {
    $('#studyLanguage').selectpicker('mobile');
    return Languages.find({});
  },
  listFluentLanguage: function() {
    $('#fluentLanguage').selectpicker('mobile');
    return Languages.find({});
  }
});
Template.profileTemplate.onRendered(function() {
  $('#studyLanguage').selectpicker('render');
  $('#fluentLanguage').selectpicker('render');
});
