const Discord = require('discord.js');
const auth = require ('./auth.json');

const client = new Discord.Client();

client.on('ready', () => {
	console.log('Connected.');
});

client.on('message', message => {

	if (message.content.substring(0, 6) === '/news ') {

		var originalMessage = message.content.substring(6);
		var editedMessage = '**NEWS: ' + originalMessage + '** *(via: <@' + message.author.id + '>)*';

		message.delete();

		message.channel.send(editedMessage);
		client.channels.get('679403067623473152').send(editedMessage);

	}
});

client.login(auth.token);