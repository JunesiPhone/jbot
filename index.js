const commando = require('discord.js-commando');
const bot = new commando.Client({
	commandPrefix:':'
});

bot.registry.registerGroup('random', 'random');
bot.registry.registerGroup('device', 'device');
bot.registry.registerGroup('removedevice', 'removedevice');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('');
