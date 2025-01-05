exports.default = {
   names: ['User Menu'],
   tags: ['ceksn'],
   command: ['sn', 'ceksn'],
   start: async (m, {
     conn
   }) => {
      let Serial = db.users[m.sender].seri
      if (Serial !== "") {
         await Promise.all([await conn.adReply(m.chat, `itu adalah serial number kamu silahkan salin`, cover, m), await m.reply(Serial)])
      } else {
         return m.reply('nomor sn kamu tidak ditemukan silahkan .daftar');
      }
   }
};