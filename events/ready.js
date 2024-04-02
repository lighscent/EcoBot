const djs = require('discord.js');
const log = require('../logger');
const db = require('../db_main');

module.exports = {
    name: djs.Events.ClientReady,
    once: true,
    execute(client) {
        try {

            const status = [
                () => `New economy system!`,
                () => `discord.gg/azukiov`,
                () => `Eazy config with /config`,
                () => `Made by Azukiov`,
            ]
            let i = 0;
            setInterval(() => {
                client.user.setActivity(status[i](), { type: djs.ActivityType.Watching });
                i = ++i % status.length;
            }, 5e3);
        } catch (err) {
            log.error(err);
        }
    }
}