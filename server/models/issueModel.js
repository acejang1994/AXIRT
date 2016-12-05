var mongoose = require('mongoose');
var CommentSchema = require('./commentModel.js').CommentSchema;

var issueSchema = mongoose.Schema({
	content : String,
	comment : { type: [CommentSchema], default: [] },
	authorId : String, // string ID
    timestamp: { type: Date, default: Date.now },
	upvote : Number,
	dateLastEdited : { type: Date, default: Date.now },
});

// expose the model for users
module.exports = {
	IssueSchema: issueSchema,
	Issue: mongoose.model('issue', issueSchema)
};
