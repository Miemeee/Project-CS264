// importing the dependencies
// defining the Express app
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
let alert = require('alert');
 

// defining the Express app
const app = express();

//setting middleware
//app.use(express.static('html'));
app.use(express.static('images'));
app.use(express.static('css'));
app.use(express.static(__dirname + '/html'));
app.use('/images', express.static(__dirname + '/Images'));
app.use(express.static('src'));

// adding Helmet to enhance your API's security
app.use(helmet());
// using bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '5000mb', extended: true, parameterLimit: 100000000000}));
// enabling CORS for all requests
app.use(cors());
// adding morgan to log HTTP requests
app.use(morgan('combined'));

//setting database
var mysql = require('mysql');
const { response } = require('express');
var connection = mysql.createConnection({
    host            : 'sql6.freemysqlhosting.net',
    user            : 'sql6580124',
    password        : 'y684NyZw7s',
    database        : 'sql6580124'
});
connection.connect(function(err) {
    if (err){
		throw err
	}else{
		console.log('[CONSOLE]: MYSQL Database is connected Successfully')
	}
});

//variable
//let username;

app.get('/', function(req, res) {
	//console.log(__dirname+'\\Login.html');
	//res.sendFile(__dirname +'/html/Login.html');                 //works

	
  });

//API
app.post('/login', function(request, response) {

	//console.log('test');
	//var alert = require('alert');

	// load input from input field ID username and password
	let username = request.body.username;
	let password = request.body.password;
	//Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM account WHERE username = ? AND password = ?', [username, password], function(error, results) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				let username_toString = results[0].username;

				if(username_toString.startsWith('01')){                   //ID start with 01 ---> teacher
					response.redirect('/home_teacher.html');
				}else if(username_toString.startsWith('02')){             //ID starts with 02 ---> staff
					response.redirect('/registryOffice.html');
				}else if(username_toString.startsWith('03')){             //ID starts with 03 ---> dean
					response.redirect('/home_dean.html');
				}else{
					response.redirect('/home_student.html');
				}


			} else {
				response.redirect('/Login_unauthorized.html');
			}			
			response.end();
		});
	} else {

	 	//alert('Please enter username and password');
		response.redirect('/Login.html');
		response.end();
	}
});

app.get('/test', function(request, response) {

	let username = 6409682553;
	//let password = 123456;
		
	connection.query('SELECT * FROM account', function(error, results) {
		if (error) throw error;
		console.log('TEST!');
		//console.log(results[i].username);
		for(var i in results){
			if(results[i].username == username){
				console.log(results[i]);
			}

		}
		//console.log((results[0].id));
		});

});

// starting the server
app.listen(2553, () => {
    console.log('[CONSOLE]: listening on port 2553');
});
