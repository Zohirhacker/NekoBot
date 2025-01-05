const rewards = {
   limit: 25,
   uang: 50
}
module.exports = {
   start: async (m, {
      conn,
      budy
   }) => {
      const tebakgame = db.games.tebakgame
      if (tebakgame.hasOwnProperty(m.sender.split('@')[0]) && budy && !budy.includes('.tebakgame') && !m.isBaileys) {
         let jawaban = tebakgame[m.sender.split('@')[0]]
         if (budy.toLowerCase() == jawaban) {
            db.users[m.sender].limit += rewards.limit
            db.users[m.sender].uang += rewards.uang
            delete tebakgame[m.sender.split('@')[0]]
            conn.adReply(m.chat, `🎮 Tebak Game \n\nJawaban Benar 🎉\nHadiah :\n+${rewards.limit} limit 🎟\n+${rewards.uang} uang 💰`, setting.thumbnail, m);            
         } else {
            return m.reply('Salah ❌')
         }
      }
   }
}