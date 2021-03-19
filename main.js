//tanımlamalarımız buraya \\
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Başarı İle ${client.user.tag} Olarak Giriş Yaptım!`);
});

client.on('message', msg => {
  if (msg.content === 'selam') {
    msg.reply('Aleyküm Selam Dostum Hoşgeldin');
  }
});
client.on('message', msg => {
  if (msg.content === 'bb') {
    msg.reply('Görüşürüz Dostum Sonra Yine Gel');
  }
});

client.login('Botunuzun Tokeni');
