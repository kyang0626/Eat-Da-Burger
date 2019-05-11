var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = URL.createConnection(process.env.JAWSDB_URL);
} else {
    
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "burgers_db"
    
    });
}


connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as ID: " + connection.threadId);
    
})

module.exports = connection;