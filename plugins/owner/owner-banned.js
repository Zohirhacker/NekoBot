exports.default = {
   names: ['Owner'],
   tags: ['banned', 'ban'],
   command: ['banned', 'ban'],
   start: async (m, {
      text,
      prefix,
      User,
      command
   }) => {
      if (!text) return m.reply(`Masukkan Nomor dan alasan nya Contoh: ${prefix+command} nomor(titik)alasan\nContoh: ${prefix+command} +62 878-7855-4275.karena dia toxic atau menghina bot\n\nlihat profile yang mau kamu banned dan salin nomornya terus tempel atau .ban @tag.alasan`);
      let number = text.split(".")[0]
      let reason = text.split(".")[1]
      if (!reason) return m.reply(`Masukan Alasannya \nContoh: ${prefix+command} nomor.alasan\nContoh: ${prefix+command} 62xxxxx.karena dia toxic atau menghina bot`)
      let num = `${number.replace("@", "").replace("-", "").replace("-", "").replace("+62 ", "62").trim()}@s.whatsapp.net`
      db.users[num].banned = true
      db.users[num].bannedReason = reason
      m.reply(`Nomor ${num.split('@')[0]} berhasil di banned\nSekarang Nomor Itu Tidak Bisa Menggunakan Bot Ini\n\nAlasan Di Banned:\n${reason} \n\nUntuk melihat daftar banned ketik .listbanned`);
   },
   owner: true
};
