const mysql = require("mysql2");
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: null,
    database: "expressdb",
});

module.exports = pool.promise();