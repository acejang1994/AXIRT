var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	oauthId : String, 
	username : String, 
    timestamp: { type: Date, default: Date.now },
});

// expose the model for users
module.exports = {
	UserSchema: userSchema,
	User: mongoose.model('User', userSchema)
};
