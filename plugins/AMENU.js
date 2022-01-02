const Amazon = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const hrs = new Date().getHours({ timeZone: Config.TIME_ZONE })
const Language = require('../language');
const Lang = Language.getString('amazone');
const tk = Config.WORKTYPE == 'public' ? false : true

Amazon.addCommand({pattern: 'help', fromMe: tk, desc: Lang.MENU}, (async (message, match) => {
    var time = new Date().toLocaleString('SI', { timeZone: Config.TIME_ZONE }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ᴳᴼᴼᴰ ᴹᴼᴿᴺᴵᴺᴳ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'

    var respoimage = await axios.get(`${Config.MENU_LOGO}`, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `        

*╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」*
┇
 ├─────────●●►
 *│🌼HEY,*  `+wish+`
 *│Time⌚:* `+time+`
 *│📡Server:* Digital Ocean
 *│💻Frameworks:* Nodejs
 *│🛰️Hosted on* Heroku
 ╰──────────●●►
*Join our anime group:* https://chat.whatsapp.com/FkPOst7NTUkLP99AqeMY8f
 ╭──────────●●➢
❏│🤖BOT COMMANDS🤖❐
┇   ───────
┇➢.owner [gives owner no.]
┇➢.alive [Check bot status]
┇➢.bot [chat with bot]
 ╰───────────●●➢

 ╭───────────●●➢
 ❏│🖼️STICKER COMMANDS🖼️❐
┇      ───────
┇➢.attp [text ]
┇➢.sticker
┇➢.toimg
┇➢.stk
 ╰────────────●●➢
 ╭────────────●●➢
 ❏│👑RIN BOT COMMANDS👑❐
┇  ─────────
┇➢.anime (anime name)
┇➢.rmeme  (sends random meme)
┇➢.quote (text)
┇➢.aniquote (text)
┇➢.joke (text)
┇
┇ᵀʰᵃⁿᵏˢ ᵗᵒ ᴹᵒʰᵈ ˢᵃᵇᵃʰᵃᵗ
 ╰────────────●●➢
 ╭────────────●●➢
 ❏│✳️TEXT TO IMG✳️❐
┇   ───────
┇➢.textimg 
┇➢.prologo [your text]
┇➢.ffpack [Free fire Logo pack]
┇➢.ttp [ text ]
┇➢.trumpsay [ text ]
┇➢.changesay [ text ]
┇➢.animesay [ text ]
┇➢.meme 
 ╰────────────●●➢

 ╭────────────●●➢
 ❏│📩DOWNLOAD COMMANDS📩❐
┇      ────────
┇➢.video [ Yt Link]
┇➢.pvideo [video link]
┇➢.play [yt link ]
┇➢.song  [ song name ]
┇➢.psong[ song name ]
┇➢.img [name]
┇➢.twt [twitter video Link]
 ╰────────────●●➢

 ╭────────────●●➢
 ❏│🐉SEARCH COMMANDS🐉❐
┇     ──────────
┇➢.yt [ topic ]
┇➢.wiki [text ]
┇➢.movie [ movie name ]
┇➢.github [ name ]
┇➢.show [tv series ]
┇➢.weather [ city ]
┇
 ╰────────────●●➢

 ╭────────────●●➢
 ❏│🧩Fun and Wallpaper🧩❐
┇  ─────────
┇➢.aniwall
┇➢.wp
┇➢.bts
┇➢.blackpink
┇➢.loli
┇➢.megumin
┇➢.waifu
┇➢.qr
┇➢.emoji
┇➢.compliment
┇➢.zodiac
 ╰───────────●●➢
 ╭────────────●●➢
 ❏│👑OWNER COMMANDS👑❐
┇  ─────────
┇➢.rename [change Group name]
┇➢.setrules    [check rules]
┇➢.tagadmin 
┇➢.clear
┇➢.report
┇➢.tagall  
┇➢.ban [ for owner ]
┇➢.add [ for owner ]
┇➢.promote [ for owner ]
┇➢.demote [ for owner ]
┇➢.invite [ for owner ]
┇➢.leave [ for owner ]
┇➢.welcome 
┇➢.goodbye
┇➢.Admin [ for owner ]
┇➢.update [check Update]
┇➢.update now [get update ]
┇➢.restart
 ╰───────────●●➢

 ╭───────────●●➢
 ❏│📺MEDIA TOOLS📺❐
┇      ───────
┇➢.xmedia [25+ tools]
┇➢.mp3 [Video To mp3]
┇➢.removebg
┇➢.voicy
┇➢.toimg
┇➢.unvoice [mp3 to voice]
 ╰───────────●●➢

 ╭───────────●●➢
 ❏│🕹️MORE COMMAND🕹️❐
┇  ────────
┇➢.brdmore
┇➢.tts
┇➢.ss [link ]
┇➢.short { link }
┇➢.trt { en si}
┇➢.covid  [ covid IN]
 ╰────────────●●➢

 ╭───────────●●➢
 ❏│🔨BOT SETTINGS🔨❐
┇ ──Owner only──
┇➢.pp [set profile pic]
┇➢.autobio on/off [change bio ]
┇➢.whatsblock on [WA link Block]
┇➢.inblock on /off 
┇➢.work public /private
┇➢.setrules
 ╰───────────●●➢
*📝Note Some api based┇commands are not working after latest whatsapp update* 
 

`}) 

 }));
