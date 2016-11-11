var routes = require("express").Router();

routes.get("/hi", function(req, res) {
	res.send({'hi':'hello'});
});

module.exports = routes;
