var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	  oauthId : String
	, username : String
	, dateCreated : Number
	
});

// expose the model for users
module.exports = {
	UserSchema: userSchema,
	User: mongoose.model('User', userSchema)
};
