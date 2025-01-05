const fs = require('fs'), sys = require('utils-mf'); 
global.Format = sys.Format
global.Connect = sys.Connect
global.mess = sys.mess_JSON
global.setting = sys.setting_JSON
global.namebot = setting.botName
global.footer = setting.footer
global.loading = pickRandom([mess.wait, 'انتظر قليلا...', 'انتظر لحظة...', 'جاري تلبية طلبكم انتظروا...', 'المرجو الإنتظار...']);
global.ed = [" █▒▒▒▒▒▒▒▒▒10%", " ██▒▒▒▒▒▒▒▒20%", " ███▒▒▒▒▒▒▒30%", " ████▒▒▒▒▒▒45%", " █████▒▒▒▒▒50%", " ███████▒▒▒75%", " █████████▒95%", " ██████████100%", " ██████████100%"]
/** m.edReply("lasttext", delay) example m.edReply("Done!", 500) **/
global.java = '⭔'
global.javi = '⬣'
global.star = '✨'
global.zw = 'ㄊ'
global.logo_premium = 'Ⓟ'
global.logo_limit = 'Ⓛ'
global.wm = `By ${setting.footer}`
global.gcbot_short = 'https://whatsapp.com/channel/0029VaX4b6J7DAWqt3Hhu01A'
global.hyd_gcbot = ['Join group', gcbot_short] 
//You can replace link_group with your own group link if you have one, or you can also link the channel if you have one, or you can fill it with another link, if from a bot type .setlink
global.link_group = 'https://whatsapp.com/channel/0029VaX4b6J7DAWqt3Hhu01A'
global.group_welcome = '*مرحبا بك لا تنسى ان تقرأ قوانين المجموعة والا سيتم طردك مباشرة في حالة لم تلتزم بها و شكرا 😅*\nتابع قناتنا هنا \n https://whatsapp.com/channel/0029VaX4b6J7DAWqt3Hhu01A'
global.group_bye = 'Bye 🐽\n%user \nHas Left From %subject Group'
//adReply is message with photo (cover)
global.adReply = true
//For owner limits, the addlimit and other features will still be used so you don't forget to just cheat. addlimit your number 999999
global.use_limit_message = true
global.limit_message = ' %limit Used Limit √'
//limit_adReply = send message limit with photo or cover 
global.limit_adReply = false
/**
 * auto_backup if u want to use mongodb change configuration on lib/src/mongo/mongo-info.js * settings directly from the bot, type .set or look in the menu, type .menu owner, try them one by one so you understand */
global.auto_backup = false
global.autodl = false
global.self = false
global.group_mode = true
global.anticall = true
global.group_only_message = false
/**
 * group_only_message is response message groupOnly when group mode is active in private chat.
 * true if wanna respond with groupOnly message
 * false if don't wanna respond message groupOnly in private chat ketik .set ada penjelasan nya atau lihat plugins/owner/owner-set.js",
 **/
global.read_group = true
global.read_private = true
global.typing_group = false
global.typing_private = false
global.recording_group = true
global.recording_private = true
fs.loadFileSync(require.resolve(__filename));