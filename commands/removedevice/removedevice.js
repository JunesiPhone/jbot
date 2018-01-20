const commando = require('discord.js-commando');

class RemoveDeviceCommand extends commando.Command{
	constructor(client){
		super(client, {
			name: "removedevice",
			group: "removedevice",
			memberName: "removedevice",
			description: "Removes set device"
		});
	}
	async run(message, args){
		message.guild.members.get(message.author.id).setNickname(message.author.username);
	}
}

module.exports = RemoveDeviceCommand;