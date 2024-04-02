const djs = require('discord.js');
const log = require('../../logger');

module.exports = {
    data: new djs.SlashCommandBuilder()
        .setName('me')
        .setDescription('Some information about me'),
    async execute(client, interaction) {
        const banner = new djs.AttachmentBuilder('assets/banner.gif')
        const pfp = new djs.AttachmentBuilder('assets/pfp.gif')


        const embed = new djs.EmbedBuilder()
            .setTitle('About me')
            .setDescription(`no description yet`)
            .setColor('#eec06b')
            .addFields(
                { name: 'Developer', value: '<@704743834730627163>' },
                { name: 'Library', value: '\`Discord.js\`', inline: true },
                { name: 'Language', value: '\`Node.js\`', inline: true },
                { name: 'Open source', value: '\`true\`', inline: true },
            )
            .setFooter({ text: 'Made with ❤️ by azukiov'})
            .setTimestamp()
            .setImage('attachment://banner.gif')
            .setThumbnail('attachment://pfp.gif')

        const discordSupport = new djs.ButtonBuilder()
            .setStyle(djs.ButtonStyle.Link)
            .setLabel('Support server')
            .setURL('https://discord.gg/azukiov')

        const github = new djs.ButtonBuilder()
            .setStyle(djs.ButtonStyle.Link)
            .setLabel('Source code')
            .setURL('https://github.com/Azukiov/EcoBot')

        const row = new djs.ActionRowBuilder()
            .addComponents(discordSupport, github)

        await interaction.reply({ embeds: [embed], components: [row] , files: [banner, pfp], ephemeral: true });
    }
}