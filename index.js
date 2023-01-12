// CONFIG
const config = {
	admins: ["936638216604385320"],
	prefix: ".",
};

// CODE
const Client = require("./src/Client");
const client = new Client(config);
const Salvis = require("salvis")

client.on("messageCreate", function(message){
    if (!message.channel.id === "1061018646010417182") return
    else if (message.channel.id === "1061018646010417182") {
        if (!message.content.includes("praise blåhaj")) {
            
            message.delete()
        } else if (message.content.includes("praise blåhaj")) return
        }
    
})

