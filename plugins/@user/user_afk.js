exports.default = {
   names: ['User Menu'],
   tags: ['afk'],
   command: ['afk'],
   start: async (m, {
      text,
      conn
   }) => {
      let reason = text ? text : 'Ngewe'
      db.users[m.sender].afkReason = reason
      let caption = `*Kamu Sekarang AFK Dengan Alasan: ${reason}*`
      let tag = [m.sender]
      let tags = conn.parseMention(text) || [`@${m.sender.split('@')[0]}`];
      let isTags = tag.concat(tags) || tag;      
      conn.adReply(m.chat, caption, cover, m, {
         mentions: isTags,
         showAds: false
      }).then(() => {
         db.users[m.sender].afkTime = + new Date
      })
   },
   group: true
}