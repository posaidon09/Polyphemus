const {
    PermissionsBitField
} = require('discord.js');
const Discord = require("discord.js")

class LogCommand {
    constructor() {
        this.name = "logsetup";
        this.description = "Logs selected actions into a selected channel";
        this.category = "Moderation";
    };

    async run({
        message, commands, args
    }) {
        const logchannel = storage.box("logs")
        const log = args[0]
        




        if (message.member.permissions.has(PermissionsBitField.Flags.ManageGuild)) {


            try {
                message.channel.send(`${log} will now start recieving server logs`)
                logchannel.set(message.guild.id, log)
            } catch {
                message.channel.send("invalid channel")
            }


        } else {
    message.channel.send("you do not have permission to do that")
}

client.on("messageDelete", async message => {
    storage.load()
    const chaenele = logchannel.get(message.guild.id)
    const id = chaenele.match(/<?@?!?(\d{17,19})>?/)[1]
    const channele = client.channels.cache.get(id)
    
    const embed = new Discord.EmbedBuilder()
    .setTitle(`Message deleted by ${message.author.tag}`)
    .setDescription(message.content)
    .setColor("#FF0000")
    .setFooter({ text: `${message.author.tag}`, iconURL: message.member.displayAvatarURL() })
    
    if (logchannel.has(message.guild.id)) {
    channele.send({ embeds: [embed] })
    } else return
    
 })

      }
}
  
module.exports = LogCommand;