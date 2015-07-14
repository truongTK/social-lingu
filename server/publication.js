/**
 * @Discription: Publish the data
 * @Author: TruongTK
 */

Meteor.publish("userinfo", function() {
  return UserInfo.find({
  });
});

Meteor.publish("languages", function() {
  return Languages.find({
  });
});

Meteor.publish("request", function() {
  return Request.find({
  });
});

Meteor.publish("reply", function() {
  return Reply.find({
  });
});

Meteor.publish("rating", function() {
  return Rating.find({
  });
});
