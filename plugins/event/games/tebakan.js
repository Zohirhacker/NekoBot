const rewards = {
   limit: 10,
   uang: 35
}
module.exports = {
   start: async (m, {
      conn,
      budy
   }) => {
      const tebaktebakan = db.games.tebaktebakan
      if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && budy && !budy.includes('.tebaktebakan') && !budy.includes('.tebakan') && !m.isBaileys) {
         const jawaban = tebaktebakan[m.sender.split('@')[0]]
         if (budy.toLowerCase() == jawaban) {
            delete tebaktebakan[m.sender.split('@')[0]]
            db.users[m.sender].limit += rewards.limit
            db.users[m.sender].uang += rewards.uang
            conn.adReply(m.chat, `Tebak Tebakan 🎮\n\nJawaban Benar 🎉\nHadiah :\n+${rewards.limit} limit 🎟\n+${rewards.uang} uang 💰`, setting.thumbnail, m);        
         } else {
            return m.reply('Salah ❌')
         }
      }
   }
}