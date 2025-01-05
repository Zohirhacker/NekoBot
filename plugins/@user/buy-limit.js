exports.default = {
   names: ['User Menu'],
   tags: ['buylimit'],
   command: ['buylimit'],
   start: async (m, {
      conn,
      text
   }) => {
      if (!text) return m.reply(`Masukkan Parameter contoh: .buylimit 1`);
      if (db.users[m.sender].uang < 10) return m.reply(`Uang kamu tidak cukup atau habis untuk membeli limit\nsilahkan bayar hutang kalo minus punya hutang\nketik .claimuang untuk uang harian\natau Ketik .my untuk cek sisa uang`);
      let deduct, upgrade;
      if (/^[1-9]\d*$/.test(text)) {
         let jumlahLimit = parseInt(text);
         let hargaLimit = jumlahLimit * 10          
         db.users[m.sender].limit += jumlahLimit
         db.users[m.sender].uang -= hargaLimit         
         conn.adReply(m.chat, `Kamu berhasil membeli ${jumlahLimit} limit dengan harga ${hargaLimit} uang`, cover, m);
      } else {
         return m.reply(`Masukkan parameter angka yang valid`);
      }
   }
};