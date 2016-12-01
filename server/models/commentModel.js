var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
	  authorId : String
	, content : String
	, dateCreated : Number
	, upvote : Number
});

// expose the model for users
module.exports = {
	CommentSchema: commentSchema,
	Comment: mongoose.model('comment', commentSchema)
};
