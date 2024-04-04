const log = require('./logger');
const db = require('./db');

// create tables
db.getConnection()
    .then(conn => {
        conn.query(`CREATE TABLE IF NOT EXISTS main (
            botID VARCHAr(20) NOT NULL,
            ecoTotal INT NOT NULL DEFAULT 0,
            guildRegistered INT NOT NULL DEFAULT 0
        )`)
            .then(() => {
                // check if a row exists
                conn.query(`SELECT * FROM main`)
                    .then(rows => {
                        if (rows.length === 0) {
                            conn.query(`INSERT INTO main (botID) VALUES ('${process.env.BOT_ID}')`)
                                .then(() => {
                                    log.info(`Row created in main with botID ${process.env.BOT_ID}`)
                                })
                        }
                    })
                log.info(`Table main created`)
            })
    })