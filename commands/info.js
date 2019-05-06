const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {   
  let embed = new Discord.RichEmbed()
    .setTitle("Information")
    .setColor(0xFF4500)
    .setDescription("PokéCord Helper is a bot to help Pokecord players. It will tell you what Pokemon it is whenever Pokecord spawns one. As such, you no longer have to rack your brains or even search Google. Sometimes, you may just miss a rare Pokemon like this.")
    .addField("Developer", "<@559642661330485304>")
    .addField("How does it work?", "All the images from Pokecord are hashed into short strings, and stored in our database. When Pokecord spawns a Pokemon, PokéCord Helper will hash it, then compare with the database and retrieve the name of the Pokemon.")
    .addField("Bot is blacklisted?", "Don't worry, creating bots is easy. Join our official server to invite the bot, and always get the latest announcements.")
    .addField("You're miles, or a moderator from Pokecord?", "Impressed with my bot? 100% accuracy. Come drop me a DM.")
    .addField("Bot invite link", "https://discordapp.com/oauth2/authorize?client_id=574878608342908949&scope=bot&permissions=8")
    .addField("Server invite link", "https://discord.gg/MGqP6Tt");
  
  message.channel.send(embed);
};

exports.help = {
  name: "info",
  category: "General",
  description: "Get some information about me.",
  usage: "info"
};
