/**
 * @Discription: JavaScript of My Request Screen
 * @Author: TruongTK
 */

Template.showRequest.helpers({
  showMyRequest: function() {
    var showMyRequest = [];
    // This line must be changed when integration
    userId = 'Truong';
    myRequest = Request.find({
      'UserId': userId
    });
    myRequest.forEach(function(eachRequest) {
      console.log(eachRequest.OutputLanguages);
      eachRequest.OutputLanguages.forEach(function(eachRequestLanguage) {
        replys = Reply.find({
          'RequestId': eachRequest.id,
          'OutputLanguage': eachRequestLanguage
        });
        showMyRequest.push({
          Request: eachRequest.Text,
          InputLanguage: eachRequest.InputLanguage,
          OutputLanguage: eachRequestLanguage,
          Replys: replys
        });
      });
    });
    return showMyRequest;
  }
});
