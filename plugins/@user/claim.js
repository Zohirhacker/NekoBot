exports.default = {
   names: ['User Menu'],
   tags: ['claim'],
   command: ['claim', 'daily', 'hadiah'],
   start: async (m, {
      conn
   }) => {
      let give = 30;
      let currentTime = new Date().getTime();
      let lastClaim = new Date(db.users[m.sender].lastClaim).getTime();
      let timeDiff = Math.floor((currentTime - lastClaim) / (1000 * 60 * 60));
      let remainingTime;
      if (timeDiff < 24) {
         remainingTime = 24 - timeDiff
      } else {
         if (!m.isBaileys) {
            db.users[m.sender].limit += give
            db.users[m.sender].lastClaim = new Date().toJSON();
            const claim = `Claim berhasil. Kamu dapat ${give} Limit\nKamu Bisa melakukan claim lagi dalam 24 jam mendatang.`
            conn.adReply(m.chat, claim, cover, m).then(() => {
               conn.sendButton(m.chat, 'Ingin Tukar Kupon?', null, m, [
                  ['Tukar Kupon', '.tukarkupon']
               ])
            })
         }
      }
      if (typeof remainingTime === "number") {
         return m.reply(`Kamu sudah melakukan claim dalam 24 jam terakhir. Tunggu ${remainingTime} Jam lagi sebelum dapat melakukan claim kembali.\nkamu juga bisa claim uang  ketik .claimuang`);
      }
   },
   register: false
};