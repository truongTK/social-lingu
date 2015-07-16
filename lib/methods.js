/**
 * @Discription: Base methods of this project
 *   Declare methods which be used in all task
 * @Author: TruongTK
 */

Meteor.methods({
  isUser: function() {
    return true;
  },
  resetAll: function() {
    UserInfo.remove({});
    Request.remove({});
    Reply.remove({});
    Rating.remove({});
    return;
  }
});
