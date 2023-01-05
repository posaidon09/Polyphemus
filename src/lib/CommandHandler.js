const fs = require("node:fs");
const path = require("node:path");
const utils = require("./Utils.js");

class CommandHandler extends Map {
	constructor(options={}) {
		const { commandPath, prefix } = options;

		if (!commandPath) throw new Error("Command path not provided");
		
		super();
		
		this.prefix = prefix;
		
		const commandFiles = fs.readdirSync(commandPath).filter(file => file.endsWith(".js"));
		
		for (const commandFile of commandFiles) {
			const Command = require(path.join(process.cwd(), commandPath, commandFile));
			const command = new Command();
			this.set(command.name, command);
		};
	};
	
	async handle(message) {
		if (message.author.bot) return;
		if (!message.content.startsWith(this.prefix)) return;
		
		const args = message.content.slice(this.prefix.length).split(" ");
		const command = args.shift().toLowerCase();

		if (!this.has(command)) return;

		await this.get(command).run({ message, args, prefix: this.prefix, handler: this, utils });
	};
};

module.exports = CommandHandler;
