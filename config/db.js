const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DBUSER,
	password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

connection.connect(err => {
	if (err) {
		console.error('Error while connecting to the DB:', err);
		return;
	}	

	console.log('DB connected');
})

module.exports = {
	connection
}