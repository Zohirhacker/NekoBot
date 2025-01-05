exports.default = {
   names: ['User Menu'],
   tags: ['transferlimit'],
   command: ['transferlimit', 'tflimit'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`Masukkan nomor atau tag dan nilai limit yang mau di transfer\ncontoh: ${prefix+command} 62xxxx 5\nAtau\ncontoh: ${prefix+command} @tag 5`);
      if (db.users[m.sender].limit < 4) return m.reply(`Gagal Transfer Pastikan Limit Kamu Masih Mencukupi Minimal Transfer Limit Adalah 5 ketik .limit untuk cek limit`);
      let number = text.split(" ")[0]
      let limit = text.split(" ")[1]
      if (!limit) return m.reply(`Masukkan nilai limit yang mau di transfer\ncontoh: ${prefix+command} 62xxxx 5\nAtau\ncontoh: ${prefix+command} @tag 5`);      
      let num = `${number.replace("@", "").trim()}@s.whatsapp.net`      
      let give = parseInt(limit);
      db.users[m.sender].limit -= give
      db.users[num].limit += give
      conn.adReply(m.chat, `Kamu berhasil transfer ${give} limit ke nomor @${num.split("@")[0]}`, cover, m, {
         showAds: true,
         mentions: [num]
      });
   }
};
