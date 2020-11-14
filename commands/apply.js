const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var categoryID = "777226828770443284";

    var staff = "754314783548899430";
    var person = message.author;



    var channelName = "Sollicitatie -" + message.author.username;

    var ticket = false;

    message.guild.channel.cache.forEach(channel => {

        if(channel.name.ToLowerCase() === channelName.ToLowerCase){
            ticket = true
            return message.reply("Je hebt al een ticket.").then(msg => msg.delete({ timeout: 3000}));
        }
        
    });

    if(ticket) return; 

    var embed = new discord.MessageEmbed()
    .settitle("Hallo" + message.author.username)
    .setColor("#00BFFF")
    .setFooter("Kanaal wordt aangemaakt")

    message.channel.send(embed).then(msg => msg.delete({ timeout: 3000}));

    message.guild.channels.create(channelName, {type: "text"}).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {
                    settedParent.updateOverwrite(message.guild.roles.cache.find(role => role.name === "@everyone")), {
                    SEND_MESSAGES: false,
                    VIEW_CHANNEL: false

                    }
                    settedParent.updateOverwrite(message.author.id, {
                        SEND_MESSAGES: true,
                        VIEW_CHANNEL: true,
                        CREATE_INSTANT_INVITE: false,
                        ATTACH_FILES: false,
                        ADD_REACTIONS: true,
                        CONNECT: true,
                        READ_MESSAGE_HISTORY: true
                        });
                        settedParent.updateOverwrite(message.guild.roles.cache.get(staff), {
                            SEND_MESSAGES: true,
                            VIEW_CHANNEL: true,
                            ADD_REACTIONS: true,
                            CONNECT: true,
                            READ_MESSAGE_HISTORY: true
                            });

                            var embedparent = new discord.MessageEmbed()
                            .settitle("Hallo" + message.author.username)
                            .setColor("#00BFFF")
                            .setFooter("Dit is uw sollicitatie, Vul deze maar rustig in");

                            var Vraag1 = new discord.MessageEmbed()
                            .settitle("Sollicitatie: Vraag 1")
                            .setColor("#00BFFF")
                            .setFooter("Wat is uw roblox username")

                            var Vraag2 = new discord.MessageEmbed()
                            .settitle("Sollicitatie: Vraag 2")
                            .setColor("#00BFFF")
                            .setFooter("Voor welke dienst wilt u solliciteren?")

                            var Vraag3 = new discord.MessageEmbed()
                            .settitle("Sollicitatie: Vraag 3")
                            .setColor("#00BFFF")
                            .setFooter("Noem 1 begrip van die dienst")

                            var Vraag4 = new discord.MessageEmbed()
                            .settitle("Sollicitatie: Vraag 4")
                            .setColor("#00BFFF")
                            .setFooter("Wat doet u als een staff lid AA doet?")

                            var Vraag5 = new discord.MessageEmbed()
                            .settitle("Sollicitatie: Vraag 5")
                            .setColor("#00BFFF")
                            .setFooter("Zult u ooit AA doen?")

                            var Vraag6 = new discord.MessageEmbed()
                            .settitle("Sollicitatie: Vraag 6")
                            .setColor("#00BFFF")
                            .setFooter("Heeft u verder nog vragen/opmerlingen?")

                            settedParent.send(message.author.id)
                            settedParent.send(embedparent)
                            settedParent.send(Vraag1)

                            settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(andwoord => {
                                var andwoord1 = andwoord(first);;
                                settedParent.send(Vraag2);
                                

                            })

                            settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(andwoord => {
                                var andwoord2 = andwoord(first);;
                                settedParent.send(Vraag3);
                                

                            })

                            settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(andwoord => {
                                var andwoord3 = andwoord(first);;
                                settedParent.send(Vraag4);
                                

                            })
                            settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(andwoord => {
                                var andwoord4 = andwoord(first);;
                                settedParent.send(Vraag5);
                                

                            })
                            settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(andwoord => {
                                var andwoord5 = andwoord(first);;
                                settedParent.send(Vraag6);
                                

                            })
                            settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(andwoord => {
                                var andwoord6 = andwoord(first);;

                                                           
                                var uitkomst = new discord.MessageEmbed()
                                .setTitle("Bedankt voor het solliciteren")
                                .setColor("#00ff00")
                                .setTimestamp()
                                .setDescription(`**Vraag 1:** \n${andwoord1}\n\n**Vraag 2**\n${andwoord2}\n\n**Vraag 3**\n${andwoord3}\n\n**Vraag 4**\n${andwoord4}\n\n*Vraag 5**\n${andwoord5}\n\n**Vraag 6**\n${andwoord6}`)
                                
                                settedParent.BulkDelete(14).then(
                                    settedParent.send(uitkomst)
                                )
                            })

                            settedParent.send(`${person}, <@&${staff}>`).then(msg => msg.delete({ timeout: 1000}));






                }).catch(err => {
                    message.channel.send("Oeps er is iets fout gegaan, Contacteer aron als dit vaker gebeurt")
                })
        })




    
  
}

module.exports.help = {
    name: "apply",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}