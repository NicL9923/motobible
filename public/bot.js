const discord = require('discord.js');
const bot = new discord.Client();

const token = "NjQ0MDAyNDEyNjQxOTEwNzk0.Xctu-w.nxgj5HitxdItFUxfj9ablKJUo-U";
const prefix = '!';

bot.on('ready', () => {
    console.log("MotoBot has successfully initialized!");
    bot.user.setActivity("2 Finger Salutes", { type: "WATCHING" });
});

//Should probably specify that messages from the bot don't count
bot.on('message', msg => {
    if (msg.author == bot.user)
        return;
    
    let args = msg.content.substring(prefix.length).split(' ');
    
    switch(args[0]) {
        case "hello":
            msg.reply("howdy there partner! How's it going?");
            break;
        case "rules":
            msg.channel.sendMessage("The rules are as follows: ");
            msg.channel.sendMessage("1. x");
            msg.channel.sendMessage("2. y");
            msg.channel.sendMessage("3. z");
            break;
        case "clear":
            if (!args[1])
                return msg.channel.sendMessage("you must specify how many lines to clear.");
            msg.channel.bulkDelete(args[1]);
            break;
        case "kick":
            if (!args[1])
                return msg.channel.sendMessage("you must specify who to kick.");
            
            const user1 = msg.mentions.users.first();
            if (user1) {
                const member = msg.guild.member(user1);
                if (member) {
                    member.kick("You have been kicked from the server.");
                    msg.reply(`You have kicked ${user1.tag}`);
                }
            } else msg.reply("The user you attempted to kick does not exist.");
            break;
        case "ban":
            if (!args[1])
                return msg.channel.sendMessage("you must specify who to ban.");
            
            const user = msg.mentions.users.first();
            if (user) {
                const member = msg.guild.member(user);
                if (member) {
                    member.ban("You have been banned from the server.");
                    msg.reply(`You have banned ${user.tag}`);
                }
            } else msg.reply("The user you attempted to ban does not exist.");
            break;
        case "help":
            msg.channel.sendMessage("Valid commands are: ");
            msg.channel.sendMessage("!hello");
            msg.channel.sendMessage("!rules");
            msg.channel.sendMessage("!clear 00");
            msg.channel.sendMessage("!kick user");
            msg.channel.sendMessage("!ban user");
            msg.channel.sendMessage("!help");
            break;
        default:
            msg.reply("you used an invalid command.");
    }

});

bot.login(token);