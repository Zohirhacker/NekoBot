const rewards = {
   limit: 20,
   uang: 40
}
module.exports = {
   start: async (m, {
      conn,
      budy
   }) => {
      const siapakahaku = db.games.siapakahaku
      if (siapakahaku.hasOwnProperty(m.sender.split('@')[0]) && budy && !budy.includes('.siapakahaku') && !budy.includes('.siapaaku')&& !m.isBaileys) {
         const jawaban = siapakahaku[m.sender.split('@')[0]]
         if (budy.toLowerCase() === jawaban) {
            delete siapakahaku[m.sender.split('@')[0]];
            console.log(siapakahaku);
            conn.adReply(m.chat, `Benar 🎊 \nkamu mendapatkan:\n+ ${rewards.limit} limit 🎟\n+ ${rewards.uang} uang 💵`, setting.thumbnail, m)
            db.users[m.sender].limit += rewards.limit
            db.users[m.sender].uang += rewards.uang                        
         } else {
            return m.reply('❎ Salah');
         }
      }
   }
}