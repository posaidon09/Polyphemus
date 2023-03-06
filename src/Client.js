const Discord = require("discord.js");

const fs = require("node:fs");
const path = require("node:path");

require("./lib/env.js").config();
require("./lib/Mathf");

const _CommandHandler = require("./lib/CommandHandler");

class Client extends Discord.Client {
	constructor(options={}) {
		const { intents, commandPath, debug, prefix, admins } = options;
		const _intents = intents ?? ["MessageContent", "Guilds", "GuildMessages", "GuildMembers"];
		const _commandPath = commandPath ?? "./src/commands";
		const _debug = debug ?? true;
		
        const _admins = admins ?? [];
        const _prefix = prefix ?? ".";

		super({ intents: _intents });
		
		this.handler = new _CommandHandler({
            commandPath: _commandPath,
            prefix: _prefix,
        });
		
		this.on("ready", async () => {
			if (_debug) console.log("Ready!");
		});
		
		this.on("messageCreate", async message => {
			await this.handler.handle(message);
		});
		

	        
	        
	    
		this.login(process.env.TOKEN);
	};
};

module.exports = Client;
