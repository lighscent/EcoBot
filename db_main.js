const mariadb = require('mariadb');
const log = require('./logger');

const db_main = mariadb.createPool({
    host: process.env.DB_MAIN_HOST,
    user: process.env.DB_MAIN_USER,
    password: process.env.DB_MAIN_PASS,
    database: process.env.DB_MAIN_NAME,
    connectionLimit: 5
});

db_main.getConnection()
    .then(conn => {
        log.db('Connected to database');
        conn.release();
    })
    .catch(err => {
        log.db('Error connecting to database');
        log.error(err);
    });


module.exports = db_main;