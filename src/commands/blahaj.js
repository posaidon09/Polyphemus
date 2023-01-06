const { AttachmentBuilder } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js');
const Discord = require("discord.js")

module.exports = class SearchCommand {

    constructor() {
        this.name = "blahaj";
        this.description = "Posts a random image of a blåhaj";
        this.category = "Fun";
    };

    async run({
        message, commands, args
    }) {
        try {
      const  image_finder  =  require("image-search-engine")
      const image = await image_finder.find("blåhaj")  

      const embed = new Discord.EmbedBuilder()  
      .setTitle("Blåhaj :D")
      .setImage(image)
      message.channel.send({ embeds: [embed] })
    } catch(err) {
        console.error(err);

    }
}
}
