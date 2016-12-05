var issues = require("express").Router();
var Issue = require("../models/issueModel.js").Issue

issues.get("/", function(req, res){
    var query = Issue.find().exec();

	query.then(function(issues){
        res.json(issues);
    })
    .catch(function(err) {
        console.log("error", err);
        res.sendStatus(500);
    });
})

issues.post("/id", function(req, res){
	var id = req.body.id
    var query = Issue.findOne({"_id": id }).exec();

	query.then(function(issues){
        res.json(issues);
    })
    .catch(function(err) {
        console.log("error", err);
        res.sendStatus(500);
    });
})

issues.post("/", function(req, res){
    var newIssue = new Issue({
    	content : req.body.issue,
    	authorId : req.body.authorId,
    	upvote : 0,
    });

    newIssue.save().then(function(issue) {
        res.json(issue);
    })
    .catch(function(err) {
        console.log("error", err);
        res.sendStatus(500);
    });
});

issues.post("/comment", function(req, res){
	var issueId = req.body.issueId; //58292eb17473a771232f5ccd
	var comment = req.body.comment;
	var authorId = req.body.authorId;

	var update = {
		"$push" : { 
			"comment" : { 
				"authorId": authorId,
				"content" : comment,
				"upvote" : 0
			}
		}
	}

	var query = Issue.findOneAndUpdate({ "_id" : issueId }, update, {"new": true }).exec();

	query.then(function(issue){
		res.json(issue);
	})
	.catch(function(err){
		console.log("error", err);
		res.sendStatus(500);
	})
});

issues.post("/upvote", function(req, res){
	
});

module.exports = issues;
