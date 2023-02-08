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
	    
	    const attach = storage.box("attachment", "")
        
        
        const attachments = message.attachments.map(a => a.url);
	    
	   const raeson = `${args.join(" ")}` ?? ""
	    
	    
	    afk.set(message.author.id, "yes")
	    
	    reason.set(message.author.id, raeson)
	    attach.set(message.author.id, attachments)
	   
	   const grab = attach.get(message.author.id)
	    if (!args.length) {
	        
	      
	    if (message.attachments.size > 0) {
	    message.channel.send({ content: `<@${message.author.id}> went afk`, files: attachments })
	    } else if (message.attachments.size == 0) {
	      
	        message.channel.send({ content: `<@${message.author.id}> went afk`, files: attachments })
	        
	    }
	  
	    
	    } else {
	        
	    message.channel.send({ content: `<@${message.author.id}> went afk: ${raeson}`, files: attachments })
	    
	    }
	    
 
	 
	 }
}

	
    


module.exports = AfkCommand