const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    return message.channel.send("https://discord.com/oauth2/authorize?client_id=777145151738085386&scope=bot&permissions=3147008");

}

module.exports.help = {
    name: "hallo",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}
