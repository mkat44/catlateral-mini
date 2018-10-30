var mysql = require("mysql");
var connection; 

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}

else { 
  connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "catlateral_dmg_db"
});
}

connection.connect(function(err) {
  if (err) {
    console.error("Oh no! We've encountered an error. Please see more about: " + err.stack + ". Thank you.");
    return;
  }
  console.log("Congrats, you made it! You're connected as number " + connection.threadId + ". Welcome, friend.");
});

module.exports = connection;