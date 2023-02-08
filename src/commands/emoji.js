const { PermissionsBitField } = require('discord.js');
module.exports = class EmoteCommand {

	constructor() {
		this.name = "addemoji";
		this.description = "Allows you to add emojis to the server";
		this.category = "Management";
	};

	async run({ message, commands, args }) {
	    const test = message.attachments.first()
	    const attachments = message.attachments.map(a => a.url);
	    const name = `${args.join(" ")}`
	    
	    if (message.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
	        
	    if (!message.attachments.size > 0) {
	        message.reply("that is not a valid emoji")
	    } else {
	    if (!args.length) {
	        message.reply("that is not a valid emoji name")
	    } else {
	  message.guild.emojis.create(test, name)
	  message.channel.send("done")
	    }
	    
	  }
  }
	    
	}
}