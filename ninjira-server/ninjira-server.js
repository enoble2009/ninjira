var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');
util = require('util'),
fs = require('fs');
var ninjiraDB = require('./ninjira-db');

ninjiraDB.loginUser();

var config = {};
config.cookieSecret = "jira-cookie";

app.use(cookieParser(config.cookieSecret));
app.use(session({secret:'secretKey'}));

app.get('/', function(request, response){
	console.log(request.session);
  	response.send('Hello World');
});

app.get('/auth', function(request, response){
  	response.send('Hello World');
});

app.get('/sessions/connect', function(request, response){
	consumer.getOAuthRequestToken(
		function(error, oauthToken, oauthTokenSecret, results) {
    		if (error) {
				console.log(error.data);
      			response.send('Error getting OAuth access token');
			}
    		else {
      			request.session.oauthRequestToken = oauthToken;
      			request.session.oauthRequestTokenSecret = oauthTokenSecret;
				console.log(request.query.uid);
				ninjiraDB.saveUser(request.query.uid, oauthToken);
      			response.redirect("https://ninjirapp.atlassian.net/plugins/servlet/oauth/authorize?oauth_token="+oauthToken);
			}
		}
	)
});

app.get('/sessions/callback', function(request, response){
	console.log ("SESSION: " + request.session.oauthRequestToken + " | " + request.session.oauthRequestTokenSecret + " | " + request.query.oauth_verifier);
	consumer.getOAuthAccessToken (
		request.session.oauthRequestToken, 
		request.session.oauthRequestTokenSecret, 
		request.query.oauth_verifier,
		function(error, oauthAccessToken, oauthAccessTokenSecret, results){			
			if (error) { 
				console.log(error.data);
				if (error.data === 'oauth_problem=token_rejected') {
					response.redirect('http://ec2-18-221-60-118.us-east-2.compute.amazonaws.com/ninjira-server/sessions/connect');
				}
			}
			else {
				request.session.oauthAccessToken = oauthAccessToken;
				request.session.oauthAccessTokenSecret = oauthAccessTokenSecret;
				console.log(request.session.oauthRequestToken, oauthAccessToken, oauthAccessTokenSecret);
				ninjiraDB.saveUserToken(request.session.oauthRequestToken, oauthAccessToken, oauthAccessTokenSecret);
				consumer.get("https://ninjirapp.atlassian.net/rest/api/latest/issue/NE-1.json", 
					request.session.oauthAccessToken, 
					request.session.oauthAccessTokenSecret, 
					"application/json",
					function(error, data, resp){
						console.log(data);
						data = JSON.parse(data);
						response.send("I am looking at: "+data["key"]);
					}
				);
			}
		}
	)
});
					

app.listen(parseInt(process.env.PORT || 8000));