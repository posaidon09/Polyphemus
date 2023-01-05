const Discord = require("discord.js");

class Page extends Array {
	constructor() {
		super();
		this.priority = true;
	};
	
	add(embed) {
		this.push(embed);
	};
	
	setPriority(bool) {
		this.priority = bool;
	};
	
	setMagic(num) {
		this.magic = num;
	};
	
	setMessage(message) {
		this.message = message;
	};
	
	async run() {
		if (!this.length) throw new Error("Embeds not set");
		if (!this.message) throw new Error("No message set");
		
		this.page = 0;
		this.max = this.length - 1;
		
		this.currentEmbed = this[this.page];
		this.currentEmbed.setFooter({ text: `Page ${this.page + 1}/${this.max + 1}` });
		
		const components = [];
		
		const row = new Discord.ActionRowBuilder();
		row.addComponents(
			new Discord.ButtonBuilder()
				.setStyle("Secondary")
				.setCustomId("page_5")
				.setEmoji("⏪"),
			new Discord.ButtonBuilder()
				.setStyle("Primary")
				.setCustomId("page_0")
				.setEmoji("◀️"),
			new Discord.ButtonBuilder()
				.setStyle("Danger")
				.setCustomId("page_2")
				.setEmoji("⏹️"),
			new Discord.ButtonBuilder()
				.setStyle("Primary")
				.setCustomId("page_1")
				.setEmoji("▶️"),
			new Discord.ButtonBuilder()
				.setStyle("Secondary")
				.setCustomId("page_6")
				.setEmoji("⏩"),
		);
		
		components.push(row);
		
		if (this.magic) {
			const row2 = new Discord.ActionRowBuilder();
			row2.addComponents(
				new Discord.ButtonBuilder()
					.setStyle("Success")
					.setCustomId("page_11")
					.setEmoji("✨"),
			);
		  
			components.push(row2);
		};
		
		const message = await this.message.channel.send({ embeds: [this.currentEmbed], components });
		
		const filter = (i) => this.priority ? i.user.id == this.message.author.id : true;
		
		const collector = message.createMessageComponentCollector({ time: 60_000, filter, type: "Button" });
			  
		collector.on("collect", async i => {
			if (!i.isButton()) return;
			if (!i.customId.startsWith("page")) return;
			
			const action = parseInt(i.customId.slice("page_".length));
			
			condition: if (action == 1) {
				if (this.page == this.max) {
					this.page = 0;
					break condition;
				};
				
				this.page++;
			};
			
			condition: if (action == 0) {
				if (this.page == 0) {
					this.page = this.max;
					break condition;
				};
				
				this.page--
			};
			
			condition: if (action == 11) {
				if (!this.magic) {
					this.page = 0;
					break condition;
				};
				
				this.page = this.magic;
			};
			
			condition: if (action == 2) {
				collector.stop();
				return i.update({ components: [] });
			};
			
			condition: if (action == 6) {
				this.page = this.max;
			};
			
			condition: if (action == 5) {
				this.page = 0;
			};
			
			this.currentEmbed = this[this.page];
			this.currentEmbed.setFooter({ text: `Page ${this.page + 1}/${this.max + 1}` });
			
			i.update({ embeds: [this.currentEmbed], components });
		});
	};
};

module.exports = Page;
