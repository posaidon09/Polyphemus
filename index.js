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



client.on("messageCreate", async message => {
  
    if (message.author.bot) return
    const logchannel = storage.box("multi")
    
    let chaenele = [...logchannel.values()]
    
   
   chaenele.shift()
    const messag = message.content
    
 if (!logchannel.has(message.channel.id)) return
     
chaenele.forEach((id) => {
    
  const cha = client.channels.cache.get(id);
  console.log(chaenele)
  cha?.send(`something`);
  
});

    
    
 })
 