exports.default = {
   names: ['Owner'],
   tags: ['join'],
   command: ['join', 'gabung'],
   start: async (m, {
      conn,
      text,
      args
   }) => {
      if (!text) return m.reply('Masukkan Link Groupnya!');
      let isUrl = (url) => url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'));
      if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!');
      m.reply('Menyatukan...');
      let result = args[0].split('https://chat.whatsapp.com/')[1]
      await conn.groupAcceptInvite(result)
      m.reply('Berhasil Bersatu Ke Group Yang Kamu Berikan')
   },
   owner: true
}
