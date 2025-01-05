exports.default = {
   names: ['Owner'],
   tags: ['addlimit'],
   command: ['addlimit', 'tambahlimit'],
   start: async (m, {
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`Masukkan/ tag nomor dan limitnya \natau tag yang mau di tambahkan limit dan masukan limitnya \nContoh: ${prefix+command} nomor limit\nContoh: ${prefix+command} 62xxxxx 25 \nAtau\nContoh: ${prefix+command} @tag 25`);
      let number = text.split(" ")[0]
      let limit = text.split(" ")[1]
      if (!limit) return m.reply(`Masukan limitnya berupa angka \nContoh: ${prefix+command} nomor(spasi)limit\nContoh: ${prefix+command} 62xxxxx 25\nAtau \nContoh: ${prefix+command} @tag 25`)
      let num = `${number.replace("@", "").replace("-", "").replace("-", "").replace("+62 ", "62")}@s.whatsapp.net`           
      db.users[num].limit += parseInt(limit)
      m.reply(`Berhasil Menambahkan ${limit} Limit Ke ${num}`);
   },
   owner: true
};
