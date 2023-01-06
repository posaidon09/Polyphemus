const Discord = require("discord.js")
module.exports = class RateCommand {

	constructor() {
		this.name = "rate";
		this.description = "Allows you to rate users";
		this.category = "Fun";
	};

	async run({ message, commands, args, mentioned }) {
	    const rating = args
	    const perc = Math.floor(Math.random() * 101)
	    
	    if (message.content.includes("@")) {
	        const rate = new Discord.EmbedBuilder
	        rate.setTitle(`user rating`)
	        rate.setColor("#7300C8")
	        rate.setDescription(`${mentioned} is ${perc}% ${rating.splice([1]).join(" ")} `)
	        message.reply({ embeds: [rate] })
	    }
	  else if (!message.content.includes("@"))  {
	      const rate2 = new Discord.EmbedBuilder
	        rate2.setTitle(`${message.member.displayName} rating`)
	        rate2.setColor("#7300C8")
	        rate2.setDescription(`${message.member.displayName} is ${perc}% ${rating.join(" ")}`)
	        message.reply({ embeds: [rate2]} )
	  }
	}
}