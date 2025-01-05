const rewards = {
   limit: 20,
   uang: 50
}
const kal = Math.floor(Math.random() * 3);
const imat = ['Salah', 'Kurang Tepat ', 'Belum Benar '][kal];
module.exports = {
   start: async (m, {
      conn,
      budy
   }) => {
      const tebakkalimat = db.games.tebakkalimat
      if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && budy && !budy.includes('.tebakkalimat') && !m.isBaileys) {
         const jawaban = tebakkalimat[m.sender.split('@')[0]].trim();
         if (budy.toLowerCase() === jawaban) {
            delete tebakkalimat[m.sender.split('@')[0]]
            db.users[m.sender].limit += rewards.limit
            db.users[m.sender].uang += rewards.uang
            conn.adReply(m.chat, `Jawaban Benar 🎉\nHadiah :\n+${rewards.limit} limit 🎟\n+${rewards.uang} uang 💰`, setting.thumbnail, m);            
         } else {
            return m.reply(imat)
         }
      }
   }
}