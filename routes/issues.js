var issues = require("express").Router();
var Issue = require("../models/issueModel.js").Issue

issues.get("/", function(req, res){
	Issue.find(function (err, issue){
		if (err){
			console.log("error", err);
			return;
		}
		res.json(issue);
	})
})

issues.post("/", function(req, res){
    var newIssue = new Issue({
    	  content : req.body.issue
    	, authorId : req.body.authorId
    	, dateCreated : new Date().getTime()
    	, upvote : 0
	});

	newIssue.save(function(err, issue){
		if (err){
			console.log("error", err);
			return;
		}
		res.json(issue);
	});
});

issues.post("/comment", function(req, res){
	var issueId = req.body.issueId; //58292eb17473a771232f5ccd
	var comment = req.body.comment;
	var authorId = req.body.authorId;

	var update = {
		"$push" : { 
			"comment" : { 
				  "authorId": authorId
				  , "content" : comment
				  , "dateCreated" : new Date().getTime()
				  , "upvote" : 0
			}
		}
	}

	Issue.findOneAndUpdate({
		"_id" : issueId 
	}, update, {"new": true }, function(err, data){
		if (err) {
			console.log("error", err);
			return;
		}
		res.json(data);
	});
});

issues.post("/upvote", function(req, res){
	
});

module.exports = issues;
