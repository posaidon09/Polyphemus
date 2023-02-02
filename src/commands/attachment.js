class AtCommand {
    constructor() {
        this.name = "attach";
        this.description = "Logs selected actions into a selected channel";
        this.category = "Moderation";
    };

    async run({
        message, commands, args
    }) {
        const attachments = message.attachments.map(attach => AttachmentBuilder.from(attach))
channel.send({ files: attachments })
        
        
        
    }
    
}

module.exports = AtCommand