const Discord = require("discord.js")
const client = new Discord.Client();
const fs = require('fs');
const db = require('quick.db');
const moment = require('moment')
require('moment-duration-format')
const commands = client.commands = new Discord.Collection();
const aliases = client.aliases = new Discord.Collection();


fs.readdirSync('./commands', { encoding: 'utf8' }).filter(file => file.endsWith(".js")).forEach((files) => {
    let command = require(`./commands/${files}`);
    if (!command.name) return console.log(`Hatalı Kod Dosyası => [/commands/${files}]`)
    commands.set(command.name, command);
    if (!command.aliases || command.aliases.length < 1) return
    command.aliases.forEach((otherUses) => { aliases.set(otherUses, command.name); })
})


client.on('message', message => {
    const prefix = "."; // prefix
    if (!message.guild || message.author.bot || !message.content.startsWith(prefix)) return;
    const args = message.content.slice(1).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))
    if (!cmd) return;
    cmd.run(client, message, args)
})

client.on('ready', () => {
    client.user.setPresence({ activity: { name: 'Developed By. Kayra - For GitHub :)' }, status: 'dnd' }) // Botun Oynuyor Kısmıdır.
    client.channels.cache.get("KANAL ID").join() //isterseniz botu bir ses kanalına sokabilmeniz için ekledim :)
    console.log(`Bot ${client.user.tag} Adı İle Giriş Yaptı!`);
})

client.config = {
    token: 'TOKEN HERE', //token
    banMembers: [''], // Ban yetkilileri
    jailMembers: [''], // Jail yetkilileri
    jailRoles: [''], // Jail rolleri
    muteMembers: [''], // Yetkili rolleri
    muteRoles: [''], // chat mute rolleri
    voicemuteRoles: [''], // ses mute rolleri
    üstYönetim: [''], //Üst Yönetim rolleri
    mesajLog: '', //Mesaj log
    vipRoles: [''], //vip rolleri
    boosterRoles: '', //boosterrolü
    ekipRoles: [''], //taglı rolü
    unregisteres: [''], //kayıtsız rolü
    maleRoles: [''], //erkek rolleri
    girlRoles: [''], //kız rolleri
    mods: [''], //mod rolleri
    chat: '', //chat idsi
    channelID: '', //kayıt kanalı id
    tag: '', //tag
    guildID: '', //sunucu id
    taglog: '', //tag log kanal id

}

client.on('message', message => {
   if (!message.guild || message.author.bot || message.content.startsWith('.')) return;
    let embed = new Discord.MessageEmbed().setColor('#00ffff')
    if (message.mentions.users.size >= 1) {
       let member = message.mentions.users.first();
       if (db.get(`${member.id}_sebeb`)) {
            const time = moment.duration(Date.now() - db.get(`${member.id}_afktime`)).format("DD [Gün], HH [Saat], mm [Dakika], ss [Saniye]")
            message.channel.send(embed.setDescription(`${member} adlı üye **${db.get(`${member.id}_sebeb`)}** sebebi ile **${time}dir** afk!`)).then(x => x.delete({ timeout: 3000 }))
        }
    } else {
     if(db.get(`${message.author.id}_sebeb`)){
       db.delete(`${message.author.id}_sebeb`)
       message.channel.send("Hoşgeldin artık AFK değilsin").then(x => x.delete({ timeout: 3000 }))
    }         
  }
})

client.on('messageDelete', (message) => {
  let channel = client.guilds.cache.get(client.config.guildID).channels.cache.find(c => c.name === "log kanal id") //eğer kanal silinir ve koruma varsa bu kanala atar id koyarsanız hata alırsınız.
  const embed = new Discord.MessageEmbed()
    .setAuthor("Mesaj Silindi", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    .setDescription(`Mesaj Sahibi: ${message.author}\nKanal: ${message.channel}\nMesaj İçeriği: \`${message.content}\``)
    .setColor("RED")
  return channel.send(embed)
})

client.on('messageUpdate', (oldMessage, newMessage) => {
  let channel = client.guilds.cache.get(client.config.guildID).channels.cache.find(c => c.name === "mesaj-log") //log kanalının ismi
  if(oldMessage.content == newMessage.content) return
  const embed = new Discord.MessageEmbed()
    .setAuthor("Mesaj Güncellendi", oldMessage.author.avatarURL({dynamic: true}))
    .setTimestamp()
    .setDescription(`Mesaj Sahibi: ${oldMessage.author}\nKanal: ${oldMessage.channel}\nEski: \`${oldMessage.content}\`\nYeni: \`${newMessage.content}\``)
    .setColor("RED")
 return channel.send(embed)
})



client.login(client.config.token) 