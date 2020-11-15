const discord = require("discord.js");
const commando = require('discord.js-commando');

module.exports.run = async (client, message, args) => {

   

    module.exports = class JoinVoiceChannelCommand extends commando.Command {
        constructor(client) {
            super(client, {
                name: 'join',
                group: 'music',
                memberName: 'join',
                description: 'Joins a voice channel.'
            })
        }
        async run(msg) {
            let vc = msg.guild.channels.find(ch => ch.name.toLowerCase() === 'music' && ch.type === 'voice');
            if(vc && !vc.connection) {
                await vc.join();
            }
        }
    }

}

module.exports.help = {
    name: "join",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}