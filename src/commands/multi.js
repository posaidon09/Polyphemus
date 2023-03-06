const {
    PermissionsBitField
} = require('discord.js');
const Discord = require("discord.js")

class MultiCommand {
    constructor() {
        this.name = "multi";
        this.description = "Every channel that gets selected using this command will recieve messages from other instances of the channel as if they are one";
        this.category = "Management";
    };

    async run({
        message, commands, args
    }) {
        let logchannel = storage.box("multi")
        let log = message.mentions.channels.first()
        




        if (message.member.permissions.has(PermissionsBitField.Flags.ManageGuild)) {


            try {
                message.channel.send(`${log} is now linked to the multiNetwork`)
                logchannel.set(message.guild.id, log.id)
            } catch {
                message.channel.send("invalid channel")
            }


        } else {
    message.channel.send("you do not have permission to do that")
}



      }
}

  
module.exports = MultiCommand;