const discord = require("discord.js");


module.exports.run = async (client, message, args) => {
    var kleur = 0
    var Dienst = 'Geen Dienst Gekozen'

    if (args(1) = '1') then
    (kleur = 1752220);
    if (args(1) = '2') then
    (kleur = 9936031);
    if (args(1) = '3') then
    (kleur = 2123412);
    if (args(1) = '4') then
    (kleur = 0);
    if (args(1) = '5') then
    (kleur = 15158332);
    if (args(1) = '6') then
    (kleur = 2067276);
    if (args(1) = '7') then
    (kleur = 15105570);


    if (args(1) = '1') then
    (Dienst = 'Politie');
    if (args(1) = '2') then
    (Dienst = 'Dienst Speciale Interventies');
    if (args(1) = '3') then
    (Dienst = 'Koningklijke Mareschousee');
    if (args(1) = '4') then
    (Dienst = 'Ambulance');
    if (args(1) = '5') then
    (Dienst = 'Brandweer');
    if (args(1) = '6') then
    (Dienst = 'Korps Commandotroepen');
    if (args(1) = '7') then
    (Dienst = 'Rijkswaterstaat');

    if (args(1) = '') then
    message.reply('Vul 1 van deze nummers in als de dienst waar je training van wilt geven, 1 = politie, 2 = DSI, 3 = kmar, 4 = ambulance 5 = brandweer, 6 = KCT, 7 = RWS')
    if (args(2) = '') then
    message.reply('Vul een tijd in')
    if (args(3) = '') then
    message.reply('Vul een datum in')
    if (args(4) = '') then
    message.reply('Vul een opmerking in')



    var serverEmbed = new discord.MessageEmbed()
            .setDescription("Amsterdam Centrum V3!")
            .setColor({kleur})
            .addField('Dienst', {Dienst})
            .addField("Tijd", args(2))
            .addField("datum", args(3))
            .addField("Opmerkingen", args(4));
            console.log('Training is aangemaakt')
            var channelsend = message.member.guild.channels.cache.get("753990955077730334");
            message.channelsend.send(serverEmbed)
        
      
}



module.exports.help = {
    name: "Training"
}