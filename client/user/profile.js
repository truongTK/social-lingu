// @Description: This file define profile functions
// @Author: Toanpp

Template.profileTemplate.helpers({
  isLogin: function() {
    if (Meteor.userId()) {
      return true;
    }
    return false;
  }
});
Template.profileTemplate.helpers({
  listStudyLanguage: function() {
    var langs = Languages.find({});
    var savedLang = [];
    var profile = UserInfo.find({
      UserId: Meteor.userId()
    }).fetch();
    if (profile.length > 0) {
      savedLang = profile[0].StudyLanguages;
    }
    var result = [];
    langs.forEach(function(item) {
      var selected = false;
      if (savedLang.indexOf(item.key) > -1) {
        selected = true;
      }
      var line = {
        key: item.key,
        text: item.text,
        isSelected: selected
      };
      result.push(line);
    });
    return result;
  },
  listFluentLanguage: function() {
    var langs = Languages.find({});
    var savedLang = [];
    var profile = UserInfo.find({
      UserId: Meteor.userId()
    }).fetch();
    if (profile.length > 0) {
      savedLang = profile[0].FluentLanguages;
    }
    var result = [];
    langs.forEach(function(item) {
      var selected = false;
      if (savedLang.indexOf(item.key) > -1) {
        selected = true;
      }
      var line = {
        key: item.key,
        text: item.text,
        isSelected: selected
      };
      result.push(line);
    });
    return result;
  },
  isFirstLogin: function() {
    var userId = Meteor.userId();
    var lstUserProfile = UserInfo.find({
      UserId: userId
    }).fetch();
    if (lstUserProfile && lstUserProfile.length > 0) {

      return false;
    }
    return true;
  }

});
Template.profileTemplate.onRendered(function() {
  $('#studyLanguage').selectpicker('render');
  setTimeout(function() {
    $('#studyLanguage').selectpicker('refresh');
  }, 500);
  $('#fluentLanguage').selectpicker('render');
  setTimeout(function() {
    $('#fluentLanguage').selectpicker('refresh');
  }, 500);

});

Template.profileTemplate.events({
  'click #btnSave': function(event) {
    var studyLang = $('#studyLanguage').val();
    var fluentLang = $('#fluentLanguage').val();
    var userId = Meteor.userId();
    var userProfile = {
      userId: userId,
      studyLanguage: studyLang,
      fluentLanguage: fluentLang
    };
    Meteor.call("updateProfile", userProfile);
  },
  'click #btnCancel': function(event) {
    console.log('click back');
    Router.go('/');
  }

});
