const { PermissionsBitField } = require('discord.js');
const Discord = require("discord.js")

class BanCommand {
	constructor() {
		this.name = "ban";
		this.description = "Bans members";
		this.category = "Moderation";
	};

	async run({ message, commands, args }) {
	  
	  const userr = message.mentions.members.first()
	  const reason = args.splice(1).join(" ")
	  
	const embed = new Discord.EmbedBuilder()
	embed.setTitle(`${userr.user.tag} has been banned`)
	embed.setColor("#BB004B")
	embed.setDescription(`reason by ${message.member.displayName}: ${reason}`)
	embed.setFooter({ text: `${message.author.tag}`, iconURL: message.member.displayAvatarURL() })
	
	const embed2 = new Discord.EmbedBuilder()
	embed.setTitle(`you've been kicked from ${message.guild.name}`)
	embed.setColor("#BB004B")
	embed.setDescription(`reason by ${message.member.displayName}: ${reason}`)
	embed.setFooter({ text: `${message.author.tag}`, iconURL: message.member.displayAvatarURL() })
	

if (message.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
    
	await message.channel.send({ embeds: [embed] })
	await message.guild.members.cache.get(userr.id).send({ embeds: [embed] })  
	await userr.ban() 
    
} else {
    message.reply("you do not have permission to ban that member")
}
	
        
        
        
    }
}
module.exports = BanCommand;