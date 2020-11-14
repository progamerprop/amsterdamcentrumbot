const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle('Bot informatie')
            .setDescription("Versie 1.0.0")
            .setColor("#0099ff")
            .addField("Bot naam", client.user.username)

            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

        return message.channel.send(botEmbed);
        console.log('Bot informatie is opgevraagd')

}

module.exports.help = {
    name: "info"
}