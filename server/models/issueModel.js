var mongoose = require('mongoose');
var Comment = require('./commentModel.js').CommentSchema;

var issueSchema = mongoose.Schema({
	  content : String
	, comment : [Comment]
	, authorId : String // string ID
	, dateCreated : Number
	, upvote : Number
	, dateLastEdited : Number
});

// expose the model for users
module.exports = {
	IssueSchema: issueSchema,
	Issue: mongoose.model('issue', issueSchema)
};
