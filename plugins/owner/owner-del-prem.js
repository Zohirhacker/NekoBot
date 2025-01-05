exports.default = {
   names: ['Owner'],
   tags: ['hapusprem'],
   command: ['removeprem', 'hapusprem', 'delprem'],
   start: async (m, {
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`Tag / Masukkan Nomornya. Contoh: ${prefix+command} nomor\nContoh: ${prefix+command} 62xxxxx`);
      let num = `${text.replace("@", "").replace("-", "").replace("-", "").replace("+62 ", "62").trim()}@s.whatsapp.net`      
      db.users[num].premium = false
      db.users[num].premiumTime = ''
      m.reply(`Nomor ${num} tidak lagi menjadi premium`);
   },
   owner: true
};