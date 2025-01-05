const { Image } = require('node-webpmux');
exports.default = {
   names: ['Tools'],
   tags: ['getexif'],
   command: ['getexif'],
   start: async (m,{
      conn
   }) => {
      if (!m.quoted) return m.reply('Reply to the sticker!')
      if (/sticker/.test(m.quoted.mtype)) {
         const img = new Image();
         await img.load(await m.quoted.download());
         const data = JSON.parse(img.exif.slice(22).toString())
         const result = JSON.stringify(data, null, 2)
         conn.adReply(m.chat, result, cover, m);      
      }
   },
   limit: true
};
