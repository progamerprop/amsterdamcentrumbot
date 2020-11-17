const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle('Bot invite')
            .setDescription("https://discord.com/oauth2/authorize?client_id=777145151738085386&scope=bot&permissions=3147008")
            .setColor("#0099ff")
            .addField("Bot naam", client.user.username)

            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('Bot made by: Aron Gaming', 'https://i.imgur.com/wSTFkRM.png');

        return message.channel.send(botEmbed);
        console.log('Bot informatie is opgevraagd')

}

module.exports.help = {
    name: "invite"
}
