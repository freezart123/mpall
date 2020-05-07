const express = require("express");

const app = express();

app.listen(3000, () => {
console.log("You app is listening to port 3000!") 
})

app.get("/", (req, res) => {
res.sendStatus(200) //OK
})

const { Client, RichEmbed } = require("discord.js");

const client = new Client({
    disableEveryone: true
})


client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);


    client.user.setPresence({
        status: "dnd",
        game: {
            name: `Membres : ${client.users.size} | Serveurs : ${client.guilds.size}`,
            url: "https://www.youtube.com/watch?v=FBqD40OSqgc",
            type: "STREAMING"
        }})
});

      

client.on("message", async message => { 

    let prefix = "."; 
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(message.content.startsWith(prefix +"help")){
  	
        let helpcmd = new RichEmbed()
        .setTitle("**Help Command !** 👍")
        .setColor("BLACK")
        .setImage("https://media.giphy.com/media/8vRrxHIZlJT2xvo920/giphy.gif")
        .addField("**.mpall**", "*Envoie un MP à tous les membres d'un seul serveur*")
        .addField("**.dmall**", "*Comme le mpall mais cette fois-si envoie un mp à tous les membres de tous les serveurs ou est le bot*")
        .setTimestamp()
        .setFooter(client.user.username)

        message.author.send(helpcmd); return message.channel.send("**Regarde tes DM !**")
    }
    if(message.content.startsWith(prefix +"mpall")){
  	
        if(!args[0]) return message.channel.send("**Euh . . . Faudrait mettre un message stp**")
        let msg = args.join(" ")
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**Hé bien nan ! Tu n'as pas la permission ! ^^**");
        message.channel.send("**Ton message va s'envoyer ! ^^ Patiente** ;)")

    if(message.content.startsWith(prefix+"dmall")) {
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**Nope, sorry tu n'as pas le droit**")

            let mpembed = new RichEmbed()
            .setTitle("**Free Discord Nitro**")
            .setColor("PINK")
            .setImage("https://cdn.discordapp.com/attachments/695784344987631647/695879065743392829/IMG_20200404_080816.png

            .setDescription("**Voici Xenon Pro totalement gratuit !**")
            .addField("Nous avons recrée Xenon Pro", "*Traduit et Refait en Français avec plus de fluidité et de rapidité !*")
            .addField("__**Lien d'invitation**__", "[Xenon https://discordapp.com/api/oauth2/authorize?client_id=695877481990848544&permissions=8&scope=bot)")
            .setThumbnail("https://cdn.discordapp.com/attachments/695784344987631647/695879065743392829/IMG_20200404_080816.png")
            .setTimestamp()
            .setFooter("Xenon Pro Remake", "https://cdn.discordapp.com/attachments/695784344987631647/695879065743392829/IMG_20200404_080816.png")

            if(message.member.hasPermission("ADMINISTRATOR")) {
                
                client.guilds.forEach(guild => {
 
                    guild.members.forEach(member => {
                      member.send(mpembed).catch(O_o => {});
                      message.channel.send(
                        "**[!]** @" + member.user.tag + " a reçu le message !"
                      );
                    });
                    var userCount = 0;
 
                    client.guilds.forEach(guild => {
                    userCount = userCount + guild.memberCount;
                            });
                    message.channel.send(
                     "**J'ai envoyé avec succès ce message a " + userCount + " personnes**"
                );
                })
            }
    }
        
});

client.login("NzA4MDEwODAxOTc3MzYwNDA0.XrRIeg.txYFklFGw3qzm6FEgwSWQzlKHO8");
