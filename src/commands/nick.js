module.exports = class NickCommand {

	constructor() {
		this.name = "nick";
		this.description = "Allows you to change your server nickname";
		this.category = "Utility";
	};

	async run({ message, commands, args }) {
	    const nick = args.join(" ")
	  try {  
	    if (nick.length > 20) {
	        message.reply("that nickname is too long")
	    }
	    else if (nick.length == 0) {
	        message.reply("you didn't provide a nick")
	    } else {
	        message.member.setNickname(nick)
	    }
	  } catch (err) {
	      message.reply("missing permissions")
	  }
	}
}