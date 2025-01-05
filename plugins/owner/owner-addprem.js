exports.default = {
   names: ['Owner'],
   tags: ['addprem'],
   command: ['addpremium', 'addprem'],
   start: async (m, {
      text,
      prefix,
      command    
   }) => {
      if (!text) return m.reply(`Masukkan / Tag Nomornya. Contoh: ${prefix+command} nomor\nContoh: ${prefix+command} 62xxxxx`);
      let number = text.split(".")[0]
      let time = text.split(".")[1]
      if (!time) return m.reply(`Masukan waktu premium nya \nContoh: ${prefix+command} nomor(titik)10 juli 2090\nContoh: ${prefix+command} 62xxxxx.10 juli 2090\nAtau \nContoh: ${prefix+command} @tag.10 juli 2090`)
      let num = `${number.replace("@", "").replace("-", "").replace("-", "").replace("+62 ", "62").trim()}@s.whatsapp.net`      
      db.users[num].premium = true
      db.users[num].premiumTime = time
      db.users[num].limit = 1000//bonus
      m.reply(`Nomor ${num} menjadi premium dan mendapatkan bonus utama limit 1000`);
   },
   owner: true
};