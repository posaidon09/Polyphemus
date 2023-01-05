const Discord = require("discord.js");

function error(reason, descripion="No Description") {
	const hex = "#FF4754";

	const embed = new Discord.EmbedBuilder();
	embed.setColor(hex);
	embed.setTitle(`${reason}`);
	embed.setDescription(`${descripion}`);
	embed.setFooter({ text: "If this error keeps occuring try and contact a developer" });

	return embed;
};

module.exports.error = error;