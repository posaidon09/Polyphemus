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

