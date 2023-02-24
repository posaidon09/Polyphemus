// CONFIG
const config = {
	admins: ["936638216604385320"],
	prefix: ".",
};

// CODE
const Client = require("./src/Client");
global.client = new Client(config);
const Salvis = require("salvis")
global.storage = new Salvis("player_data", { path: "./src/storage/players" , autosave: true , autoload: true , prettify: true });



client.on("ready", () => {
  const slashCommands = client.application.commands;
  
  slashCommands.create({
    name: "ping",
    description: "replies with pong"
  });
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName, options } = interaction;
  if (commandName === "ping") {
    interaction.reply({
      content: "pong"
    });
  }
});
