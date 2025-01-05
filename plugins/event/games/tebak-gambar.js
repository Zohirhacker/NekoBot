const rewards = {
   limit: 10,
   uang: 20
}
const mistaken = Math.floor(Math.random() * 3);
const message = ['💩 Salah', '🐽 Kurang Tepat', '🍌 Belum Benar'][mistaken];
module.exports = {
   start: async (m, {
      conn,
      budy
   }) => {
      const tebakgambar = db.games.tebakgambar
      if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && budy && !m.isBaileys) {
         const jawaban = tebakgambar[m.sender.split('@')[0]]
         if (budy.toLowerCase() === jawaban) {
            conn.adReply(m.chat, `Benar 🌈\nkamu mendapatkan:\n+${rewards.limit} Limit\n+${rewards.uang} Uang`, setting.thumbnail, m);
            db.users[m.sender].limit += rewards.limit
            db.users[m.sender].uang += rewards.uang                    
            delete tebakgambar[m.sender.split('@')[0]];
         } else {
            return m.reply(message)
         }
      }
   }
}