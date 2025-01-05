exports.default = {
   names: ['Maker'],
   tags: ['stickerwm', 'take'],
   command: ['stickerwm', 'swm', 'wm', 'take'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      mime,
      quoted
   }) => {
      let pack = text.split('|')[0] ? text.split('|')[0] : ' ‎'
      let own = text.split('|')[1] ? text.split('|')[1] : ' ‎'
      if (/webp/.test(mime) || m.mtype === 'stickerMessage') {
         let buffer = await quoted.download();
         conn.adReply(m.chat, loading, cover, m);
         conn.sendImageAsSticker(m.chat, buffer, m, {
            packname: pack,
            author: own
         });
      } else {
         return m.reply(`Balas stiker dengan caption ${prefix + command}\ngunakan | sebagai pemisahan (optional)`);
      }
   },
   premium: true
};
