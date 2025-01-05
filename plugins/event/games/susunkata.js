const rewards = {
   limit: 15,
   uang: 30
}
const miss = Math.floor(Math.random() * 3);
const wrong = ['❎ Salah', '🤯 Kurang Tepat', '🥵 Belum Benar'][miss];
module.exports = {
   start: async (m, {
      conn,
      budy
   }) => {
      const susunkata = db.games.susunkata
      if (susunkata.hasOwnProperty(m.sender.split('@')[0]) && budy && !budy.includes('.susunkata') && !m.isBaileys) {
         const jawaban = susunkata[m.sender.split('@')[0]]
         if (budy.toLowerCase() === jawaban) {
            delete susunkata[m.sender.split('@')[0]];
            conn.adReply(m.chat, `Benar 🎊 \nkamu mendapatkan:\n+ ${rewards.limit} limit 🎟\n+ ${rewards.uang} uang 💵`, setting.thumbnail, m)
            db.users[m.sender].limit += rewards.limit
            db.users[m.sender].uang += rewards.uang                       
         } else {
           return m.reply(wrong)
         }
      }
   }
}