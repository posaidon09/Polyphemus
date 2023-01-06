module.exports = class UnLockCommand {

    constructor() {
        this.name = "unlock";
        this.description = "Allows you to rate things";
        this.category = "Moderation";
    };

    async run({
        message, commands, args, mentioned
    }) {
        const PermissionsBitField = require("discord.js")
        if (message.author.id === "936638216604385320") {

            message.channel.permissionOverwrites.edit(message.guild.id, {
                SendMessages: true
            });


            message.channel.send(`Successfully unlocked **${message.channel.name}**`)
        } else {
            message.channel.send("you cant do that dumbass")
        }
    }
}