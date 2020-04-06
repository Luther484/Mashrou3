const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("690931823189950464")
setInterval(function() {
channel.send(`السلام عليكم انا زق واحب الزق وايفان قحبة `);
}, 30)
})

client.login(process.env.BOT_TOKEN);