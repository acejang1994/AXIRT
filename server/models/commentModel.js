var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
	authorId : String,
	content : String,
	upvote : Number,
    timestamp: { type: Date, default: Date.now },
});

// expose the model for users
module.exports = {
	CommentSchema: commentSchema,
	Comment: mongoose.model('comment', commentSchema)
};
