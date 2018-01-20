const commando = require('discord.js-commando');

class DeviceCommand extends commando.Command{
	constructor(client){
		super(client, {
			name: "adddevice",
			group: "device",
			memberName: "device",
			description: "Add device to nickname"
		});
	}
	async run(message, args){
		if(args){
			message.guild.members.get(message.author.id).setNickname(message.author.username + " [" + args + "]");
		}else{
			message.reply("Please enter a device");
		}
	}
}

module.exports = DeviceCommand;