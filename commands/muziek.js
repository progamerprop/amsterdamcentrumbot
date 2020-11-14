const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    client.on('message', async message => {
        // Voice only works in guilds, if the message does not come from a guild,
        // we ignore it
        if (!message.guild) return;
      
        if (message.content === '$join') {
          // Only try to join the sender's voice channel if they are in one themselves
          if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
          } else {
            message.reply('You need to join a voice channel first!');
          }
        }
      });
      // Play a ReadableStream
     connection.play(ytdl(args[0], { quality: 'highestaudio' }));

}

module.exports.help = {
    name: "play",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}