const Discord = require("discord.js")
module.exports = class RateThingCommand {

	constructor() {
		this.name = "ratething";
		this.description = "Allows you to rate things";
		this.category = "Fun";
	};

	async run({ message, commands, args, mentioned }) {
	    const rating = args.join(" ")
	    const perc = Math.floor(Math.random() * 101)
	    if (!args.length) {
	        const error = new Discord.EmbedBuilder()
	        .setTitle("Error")
	        .setDescription("You didn't provide a thing to rate")
	        .setColor("#FF0024")
	        message.reply({ embeds: [error] })
	    }
	       else {
	        const rate = new Discord.EmbedBuilder()
	        rate.setTitle(`thing rating`)
	        rate.setColor("#7300C8")
	        rate.setDescription(`${rating} is ${perc}/100`)
	        message.reply({ embeds: [rate] })
	    }
	  
	}
}