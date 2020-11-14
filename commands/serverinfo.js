const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverEmbed = new discord.MessageEmbed()
            .setDescription("Amsterdam Centrum V3!")
            .setColor("#kleur")
            .addField("De bot naam", client.user.username)
            .addField("Je bent deze server gejoind op", message.member.joinedAt)
            .addField("Totaal memebers", message.guild.memberCount);
            console.log('Server informatie is opgevraagd')
        return message.channel.send(serverEmbed);
        

}

module.exports.help = {
    name: "serverinfo"
}