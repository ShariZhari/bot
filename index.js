"use strict";

require("dotenv").config(); //accede al entorno y trae la conviguracion del archivo .env
const { Client, Intents } = require("discord.js");

console.log("Initializing");

const ANSWER = ['Buenas noches', 'Buenos días', 'Buenas tardes']

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
}); //banderas de permisos del bot
const TOKEN = process.env.TOKEN;

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("We're online!");
});

function gotMessage(message){
  //if(message.channel === channelID)
  if (message.content === 'hola' && !message.author.bot){
    let randomIndex = Math.floor(Math.random()*ANSWER.length);
    message.channel.send(ANSWER[randomIndex]);
  }
    //message.reply('mundo')
}

client.on("messageCreate", gotMessage);

// Login to Discord with your client's token
client.login(TOKEN);
