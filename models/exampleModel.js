var mongoose = require('mongoose');

var exampleSchema = mongoose.Schema({

});

// expose the model for users
module.exports = {
	ExampleSchema: exampleSchema,
	Example: mongoose.model('Example', exampleSchema)
};
