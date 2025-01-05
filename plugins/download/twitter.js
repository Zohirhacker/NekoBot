exports.default = {
   names: ['Downloader'],
   tags: ['twitter', 'twt'],
   command: ['twitter', 'twt'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`contoh ${prefix+command} https://twitter.com/gofoodindonesia/status/1229369819511709697`);
      conn.adReply(m.chat, loading, cover, m);
      const data = await JSON_URL('https://www.ruhend-api.mywire.org/api/twitter?key=mnXIqH&url=' + text);      
      conn.sendFile(m.chat, data.data.url.hd || data.data.url.sd, data.data.title || '', m)
   },
   limit: 2
};
