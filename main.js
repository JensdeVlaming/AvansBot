// Needed to have a functional bot
const config = require("./config.json")
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true, intents: [ 
    'GUILDS', 
    //'GUILD_MEMBERS', 
    //'GUILD_BANS', 
    'GUILD_EMOJIS_AND_STICKERS',
    'GUILD_INTEGRATIONS',
    'GUILD_WEBHOOKS',
    'GUILD_INVITES',
    'GUILD_VOICE_STATES',
    //'GUILD_PRESENCES',
    'GUILD_MESSAGES',
    'GUILD_MESSAGE_REACTIONS',
    'GUILD_MESSAGE_TYPING',
    'DIRECT_MESSAGES',
    'DIRECT_MESSAGE_REACTIONS',
    'DIRECT_MESSAGE_TYPING'
] });

// Send message in console when bot is ready
bot.on('ready', async () => {
    console.log(`${bot.user.username} is online!`);
});


bot.on("messageCreate", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.toLowerCase().split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice[1];

    if(cmd === `${prefix}ping`){
        return message.channel.send("Pong!")
    }

});

// Authorization with token
bot.login(config.token);