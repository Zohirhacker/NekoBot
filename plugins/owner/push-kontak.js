exports.default = {
   names: ['Owner'],
   tags: ['pushkontak'],
   command: ['pushkontak', 'pk'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      participants
   }) => {
      if (!text) return m.reply(`Contoh ${prefix+command} Hi Ka Save Ya Namaku Jembut`);
      let users = participants.map(a => a.id);
      let delay = 10000 // 10000 = 10 detik
      m.reply('Hold On Sir Doing Your Command...')
      for (let i = 0; i < users.length; i++) {
         setTimeout(async () => {
            await conn.sendMessage(users[i], {
               text: `${text}`
            }, m);
            if (i === users.length - 1) {
               await m.reply('Pesan sudah dikirim ke semua member');
            }
         }, delay * i);
      }
   },
   owner: true,
   group: true
};
