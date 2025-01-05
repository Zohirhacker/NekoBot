const { igdl } = require('ruhend-scraper');
module.exports = {
   start: async (m, {
      conn,
      budy
   }) => {
      if (autodl && budy.match(/(https?:\/\/(?:www\.)?instagram\.[a-z\.]{2,6}\/[\w\-\.]+(\/[^\s]*)?)/g)) {
         if (m.isBaileys || budy.includes('.ig') || budy.match(/\.instagram\s/) || budy.match('ig' + ' ') || budy.match('instagram' + ' ')) return
         if (db.users[m.sender].limit < 0) return m.reply(mess.limit);
         m.react('🕘')
         let res = await igdl(budy);
         let data = await res.data;
         if (data.length > 0) {
            for (let i of data) {
               conn.sendFile(m.chat, i.url, {
                  quoted: m
               });
            }
            db.users[m.sender].limit -= 4
            m.reply(limit_message.replace('%limit', 4))
         } else {
            return m.reply(`Media tidak ditemukan`);
         }
      }
   }
}