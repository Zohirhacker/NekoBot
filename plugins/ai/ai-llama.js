exports.default = {
   names: ['ai'],
   tags: ['llama'],
   command: ['llama'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      Format
   }) => {
      if (!text) return m.reply(`ex ${prefix+command} how are you?`);
      m.react('⏳');
      const data = await Format.llama(text)
      conn.adReply(m.chat, loading, cover, m).then(() => {
         conn.adReply(m.chat, data, cover, m, {
            showAds: true
         });
      });
   },
   limit: 2
}