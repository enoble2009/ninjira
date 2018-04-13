var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'ninjira'
});

exports.loginUser = function(userId) {
	connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
	  if (error) throw error;
	  console.log('The solution is: ', results[0].solution);
	});
};

exports.saveUser = function(userId, rToken) {
	connection.query('INSERT INTO users (id, rtoken) values ("' + userId + '","' + rToken + '")', function (error, results, fields) {
	  if (error) throw error;
	  console.log('User with token ['+rToken+'] is trying to loging in.');
	});
};

exports.saveUserToken = function(rToken, aToken, aSecret) {
	connection.query('UPDATE users SET atoken = "'+aToken+'", asecret = "'+aSecret+'" WHERE rtoken = "'+rToken+'"', function (error, results, fields) {
	  if (error) throw error;
	  console.log('User with token ['+aToken+'] is logged in.');
	});
};

