const Discord = require("discord.js")
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js');
class RpsCommand {
	constructor() {
		this.name = "rps";
		this.description = "Rock paper scissors on discord";
		this.category = "Fun";
	};

	async run({ message, commands, args }) {
	    
	    const mentioned = message.mentions.users.first()  
	    const bot = "1050122102084227133"
	    
	    
	    const rps_embed2 = new Discord.EmbedBuilder()
	    .setTitle(`<@${message.author.id}> vs <@${bot}>`)
	    .setColor("#8F00FF")
	    .setDescription("Select one of the buttons to start")
	    
	    const buttons = new ActionRowBuilder().addComponents(
	        new ButtonBuilder()
             .setCustomId('rock')
             .setLabel('Rock')
             .setStyle(ButtonStyle.Danger), 
	        new ButtonBuilder()
	        .setCustomId('paper')
	        .setLabel('Paper')
	        .setStyle(ButtonStyle.Success),
	        new ButtonBuilder()
	        .setCustomId('scissors')
	        .setLabel('Scissors'),
	        )
	  if (mentioned) {
	      
	      const rps_embed = new Discord.EmbedBuilder()
	    .setTitle(`<@${message.author.id}> vs ${mentioned.id}`)
	    .setColor("#8F00FF")
	    .setDescription("Select one of the buttons to start")
	    
	    message.channel.send({ embeds: [rps_embed], components: buttons })
	    
	  } else {
	      
	   message.channel.send({ embeds: [rps_embed2], components: buttons })
	  }
const collector = message.channel.createMessageCollector({ time: 60 * 1000 /* 1 Minute */ });



  }
}
module.exports = RpsCommand