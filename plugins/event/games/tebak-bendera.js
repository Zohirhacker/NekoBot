const rewards = {
   limit: 25,
   uang: 50
}
module.exports = {
   start: async (m, {
      conn,
      budy
   }) => {
      const tebakbendera = db.games.tebakbendera
      if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && budy && !budy.includes('.tebakbendera') && !m.isBaileys) {
         const jawaban = tebakbendera[m.sender.split('@')[0]]
         if (budy.toLowerCase() == jawaban) {
            delete tebakbendera[m.sender.split('@')[0]]
            db.users[m.sender].limit += rewards.limit
            db.users[m.sender].uang += rewards.uang
            conn.adReply(m.chat, `🎮 Tebak Bendera \n\nJawaban Benar 🎉\nHadiah :\n+${rewards.limit} limit 🎟\n+${rewards.uang} uang 💰`, setting.thumbnail, m);
         } else {
            return m.reply('Salah')
         }
      }
   }
};