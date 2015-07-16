/**
 * @Discription: Insert Reply
 *
 * @Author: TruongTK
 */

Meteor.methods({
  postNewReply: function(newReply) {
    // Make sure the user is logged in before inserting a request
    // if (!Meteor.userId()) {
    //   throw new Meteor.Error("not-authorized");
    // }
    Reply.insert(newReply);
    // Request.insert({
    //   Text: 'starlord',
    //   InputLanguage: 'en',
    //   OuputLanguages: ['ru', 'vi'],
    //   UserId: 'aa',
    //   DateCreate: new Date(),
    //   DateUpdate: new Date()
    // });
  }
});
