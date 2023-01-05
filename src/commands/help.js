const Discord = require("discord.js");

class HelpCommand {
	constructor() {
		this.name = "help";
		this.description = "Use to get this help menu";

		this.category = "Information";
		this.beta = true;

		this.args = {
			optional: [ "command" ]
		};

		this.hex = "#FFDD8B";
	};

	async run({ message, args, handler, utils }) {
		if (args.length) {
			const query = args[0].toLowerCase();

			if (!handler.has(query)) return message.reply({ embeds: [utils.error("Command not found", "Try using !help to get a list of commands")] });
			const command = handler.get(query);

			const embed = new Discord.EmbedBuilder();
			embed.setColor(command.hex ?? this.hex);
			embed.setTitle(`${command.beta ? "⚠ " : ""}${command.name.toUpperCase()} (${command.category})`);
			embed.setFooter({ text: "Arguments wrapped in [] are optional otherwise are required" });

			if (command.beta) {
				embed.setAuthor({ name: "This command is currently in BETA and is being developed" });
			};

			const optionalArguments = [];
			const requiredArguments = [];

			if (command.args) {
				if (command.args["optional"]) {
					for (const arg of command.args["optional"]) {
						optionalArguments.push(arg);
					};
				};

				if (command.args["required"]) {
					for (const arg of command.args["required"]) {
						requiredArguments.push(arg);
					};
				};
			};

			embed.addFields(
				{ name: "DESCRIPTION", value: command.description ?? "No Description" },
				{ name: "ARGUMENTS", value: `${command.args ? `${requiredArguments.join("|")} [${optionalArguments.join("|")}]` : "No Arguments"}` }
			);

			return message.reply({ embeds: [embed] });
		};

		const commands = Array.from(handler.values());

		const categories = {};

		const embed = new Discord.EmbedBuilder();
		embed.setColor(this.hex);
		embed.setFooter({ text: "Tip: Use !help <command> to get more info about the command" });
		embed.setTitle("COMMANDS");
		embed.setAuthor({ name: "Commands labeled with ⚠ are in BETA" });

		for (const command of commands) {
			if (categories[command.category]) {
				categories[command.category].push(command);
				continue;
			};

			categories[command.category] = [command];
		};

		for (const category in categories) {
			const cat = categories[category];
			const text = [];

			for (const command of cat) {
				text.push(`\`${command.beta ? "⚠ " : ""}${command.name}\``);
			};

			embed.addFields({ name: category.toUpperCase(), value: text.join(" | ") });
		};

		return message.reply({ embeds: [embed] });
	};
};

module.exports = HelpCommand;