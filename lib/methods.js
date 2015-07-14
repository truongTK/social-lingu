/**
 * @Discription: Base methods of this project
 * @Author: TruongTK
 */

Meteor.methods({
  isUser: function() {
    return true;
  },
  resetAll: function() {
    UserInfo.remove({});
    Languages.remove({});
    Request.remove({});
    Reply.remove({});
    Rating.remove({});
    return;
  }
});
