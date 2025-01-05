const { ytmp4 } = require('ruhend-scraper');
module.exports = {
   start: async (m, {
      conn,
      budy
   }) => {
      let Links = /(http(?:s)?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^\s&]+)/g;
      let ShortsLinks = /(http(?:s)?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([^\s&]+)/g;
      let ExLyt = budy.includes('.ytv') || budy.includes('.ytmp4') || budy.includes('.yta') || budy.includes('.ytmp3') || budy.includes('.play') || budy.includes('ytv') || budy.includes('ytmp4') || budy.includes('yta') || budy.includes('ytmp3') || budy.includes('play')
      if (autodl && Links.test(budy) || ShortsLinks.test(budy)) {
         if (m.isBaileys || ExLyt) return
         if (db.users[m.sender].limit < 0) return m.reply(mess.limit);
         let youtubeLinks = budy.match(Links) || budy.match(ShortsLinks);
         for (let youtubeLink of youtubeLinks) {
            m.react('🕙')
            let { title, video, thumbnail } = await ytmp4(youtubeLink);
            let caption = `🍌 Youtube Video\n`
            caption += `${java} Judul : ${title}`           
            conn.sendFile(m.chat, video, {
               caption: caption,
               quoted: m
            });
            db.users[m.sender].limit -= 4
            m.reply(limit_message.replace('%limit', 4))
         }
      }
   }
};