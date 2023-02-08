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
	 const afk = storage.box("afk")
	    
	   const reason = storage.box("reason")
	   const attach = storage.box("attachment")
        
	 const mentioned = message.mentions.users.first()
	 
	   if (message.author.bot) return 
	   if (message.content.includes(".afk")) return
	   
    if (afk.has(message.author.id)) {
        afk.delete(message.author.id)
        if (message.content.includes("--afk")) return
        else if (attach.has(message.author.id)) { 
        
        
        message.channel.send(`<@${message.author.id}> has returned`)
        
            attach.delete(message.author.id)
        } else if (!attach.has(message.author.id)) return
            
        
        }
    
    
   
	if (mentioned) {
	    
	if (afk.has(`${mentioned.id}`)) {
	    if (message.author.bot) return
	    if (!reason.get(`${mentioned.id}`).length) {
	        
	    message.reply({ content: `that user is AFK`, files: attach.get(mentioned.id) })
	    } else {
	    message.reply({ content: `that user is AFK: ${reason.get(`${mentioned.id}`)}`, files: attach.get(mentioned.id) })
	    
	    
	    }
	} else if (!afk.has(`${mentioned.id}`)) return
	} else if (!mentioned) return
	
	
	 })