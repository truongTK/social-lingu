/**
 * @Discription: JavaScript of My Request Screen
 * @Author: TruongTK
 */

Template.showOtherRequest.helpers({
  showOtherRequest: function() {
    var showOtherRequest = [];
    // This line must be changed when integration
    userId = 'Truong';
    otherRequest = Request.find({
      'UserId': {
        $ne: userId
      }
    });
    //.fetch();
    // for (i = 0; i < otherRequest.length; i++) {
    //   for (j = 0; j < otherRequest[i].OutputLanguages.length; j++) {
    //     replyToRequest = Reply.find({
    //       'RequestId': otherRequest[i].id,
    //       'OutputLanguage': otherRequest[i].OutputLanguages[j]
    //     }).fetch();
    //     showOtherRequest.push({
    //       requestId: otherRequest[i].id,
    //       request: otherRequest[i].Text,
    //       inputLanguage: otherRequest[i].InputLanguage,
    //       outputLanguage: otherRequest[i].OutputLanguages[j],
    //       reply: replyToRequest
    //     });
    //   }
    // }
    otherRequest.forEach(function(eachRequest) {
      console.log(eachRequest.OutputLanguages);
      eachRequest.OutputLanguages.forEach(function(eachRequestLanguage) {
        replys = Reply.find({
          'RequestId': eachRequest.id,
          'OutputLanguage': eachRequestLanguage
        });
        showOtherRequest.push({
          Request: eachRequest.Text,
          InputLanguage: eachRequest.InputLanguage,
          OutputLanguage: eachRequestLanguage,
          Replys: replys
        });
      });
    });
    return showOtherRequest;
  }
});
