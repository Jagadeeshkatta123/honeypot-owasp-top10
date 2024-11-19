const mysql = require("mysql");

exports.handler = async (event) => {
    const userId = event.queryStringParameters.id;

    // SQL Injection vulnerability
    const query = `SELECT * FROM users WHERE id = '${userId}'`;

    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "honeypot",
    });

    return new Promise((resolve) => {
        connection.query(query, (error, results) => {
            if (error) resolve({ statusCode: 500, body: "Database Error" });
            resolve({ statusCode: 200, body: JSON.stringify(results) });
        });
    });
};