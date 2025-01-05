const fetch = require('node-fetch');
exports.default = {
   names: ['tools'],
   tags: ['fetch'],
   command: ['fetch', 'get'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`Enter the link or URL \n ex: ${prefix+command} https://www.google.com`);
      if (!text.match(/http|https/g)) return m.reply(`the wrong link starts with http or https`);
      m.reply(loading);
      let res = await fetch(text);
      if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
         throw `Content-Length: ${res.headers.get('content-length')}`
      }
      if (!/text|json/.test(res.headers.get('content-type'))) {
         return conn.sendFile(m.chat, text, {
            quoted: m
         });
      }
      let txt = await res.buffer();
      try {
         txt = JSON.stringify(JSON.parse(txt + ''), null, 4);
      } catch (e) {
         txt = txt + ''
      } finally {
         m.reply(txt.slice(0, 65536) + '')
      }
   },
   limit: 5,
   register: false
};