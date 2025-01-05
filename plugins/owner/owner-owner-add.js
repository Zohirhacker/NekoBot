exports.default = {
   names: ['Owner'],
   tags: ['addowner', 'delowner'],
   command: ['addowner', 'addown', 'delowner', 'delown'],
   start: async (m, {
      text,
      prefix,
      command
   }) => {
      if (/addowner|addown/.test(command)) {
         if (!text) return m.reply(`Masukkan Nomornya contoh\n${prefix+command} 62xxxx`);
         let num = `${text.replace("@", "").replace("-", "").replace("-", "").replace("+62 ", "62").trim()}`;
         setting.ownerNumber.push(num);
         save_setting()
         m.reply(`Sukses Menambahkan ${num} sebagai owner`);
      } else if (/delowner|delown/.test(command)) {
         if (!text) return m.reply(`Masukkan Nomor yang ingin dihapus dari daftar owner.`);
         let index = setting.ownerNumber.indexOf(text);
         if (index !== -1) {
            setting.ownerNumber.splice(index, 1);
            save_setting()
            m.reply(`Nomor ${text} berhasil dihapus dari daftar owner.`);
         } else {
            return m.reply(`Nomor ${text} tidak ditemukan dalam daftar owner.`);
         }
      }
   },
   owner: true
}