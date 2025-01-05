exports.default = {
   names: ['User Menu'],
   tags: ['limit'],
   command: ['limit', 'ceklimit'],
   start: async (m, {
     conn
   }) => {
      let limitUser = db.users[m.sender].limit
      if (m.isBaileys) return;
      if (limitUser !== undefined) {
         let Limit = `Kamu Memiliki ${limitUser} Limit Tersisa`
         conn.adReply(m.chat, Limit, cover, m, {
            showAds: true
         })
      } else {
        return m.reply('Limit kamu tidak ditemukan silahkan .daftar');
      }
   }
};