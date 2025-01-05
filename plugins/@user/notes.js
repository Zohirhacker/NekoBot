exports.default = {
   names: ['User Menu'],
   tags: ['catatan', 'buatcatatan', 'hapuscatatan'],
   command: ['catatan', 'buatcatatan', 'hapuscatatan'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (command == 'catatan') {
         if (db.users[m.sender].notes == "") {
            return m.reply(`Kamu belum memiliki catatan silahkan ketik \n${prefix}buatcatatan textkamu`);
         } else {
            await m.reply(`${db.users[m.sender].notes}`);
            await m.reply(`itu cacatan kamu\njika sudah ada catatan dan jika kamu mau edit, salin dulu catatan sebelum nya lalu tambahkan text nya dengan mengetik ${prefix}buatcatatan\nkalo mau hapus catatan ketik ${prefix}hapuscatatan`);
         }
      } else if (command == 'buatcatatan') {
         if (!text) return m.reply('text nya mana?');
         db.users[m.sender].notes = text
         m.reply(`Berhasil Memasukan Cacatan Kamu ketik ${prefix}catatan`);
      } else if (command == 'hapuscatatan') {
         db.users[m.sender].notes = ''
         m.reply(`Berhasil Menghapus Cacatan Kamu. Untuk Masukan Catatan Baru ketik ${prefix}buatcatatan`);
      }
   }
}