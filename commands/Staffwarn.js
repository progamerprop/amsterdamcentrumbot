const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    return message.channel.send("Hallo!!");

}

module.exports.help = {
    name: "Staffwarn",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}