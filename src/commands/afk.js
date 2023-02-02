const { PermissionsBitField } = require('discord.js');
const Discord = require("discord.js")

class AfkCommand {
	constructor() {
		this.name = "afk";
		this.description = "Displays you as AFK";
		this.category = "Utility";
	};

	async run({ message, commands, args }) {
       const afk = storage.box("afk")
	    
	   const reason = storage.box("reason")
	    
	    
	    
	   const raeson = `${args.join(" ")}` ?? ""
	    
	    
	    afk.set(message.author.id, "yes")
	    
	    reason.set(message.author.id, raeson)
	    if (!args.length) {
	    message.channel.send(`<@${message.author.id}> went afk`)
	    } else {
	    message.channel.send(`<@${message.author.id}> went afk: ${raeson}`)
	    }
	    
 
	 
	 }
}

	
    


module.exports = AfkCommand