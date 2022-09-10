const Discord = require('discord.js');

const prefix = '-';

const client = new Discord.Client({
    allowedMentions: {
    parse: ['users', 'roles'],
    repliedUser: true,

    },
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_PRESENCES",
        "GUILD_MEMBERS",
        "GUILD_MESSAGE_REACTIONS",
    ],

});


client.on("ready", () => {
    console.log("Bot is online!")

})


client.login("MTAxODIzNjA0MDEyNjkzNTExMA.G02n5T.j0pVRj12AsEzrG8Iw_Xjc4vx7jNvqaB7EqMJyk")