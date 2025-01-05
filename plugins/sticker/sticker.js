exports.default = {
   names: ['Maker'],
   tags: ['sticker'],
   command: ['sticker', 's', 'stiker', 'sk'],
   start: async (m, {
      conn,
      prefix,
      command,
      mime,
      quoted
   }) => {
      let pack = setting.botName;
      let own = setting.footer;
      if (/image|video/.test(mime) || m.mtype === 'imageMessage' || m.mtype === 'videoMessage') {
         let buffer = await quoted.download();
         conn.adReply(m.chat, loading, cover, m);
         conn.sendImageAsSticker(m.chat, buffer, m, {
            packname: pack,
            author: `${own}\ncreated : \n${waktu.tanggal}\n${waktu.time} ${waktu.suasana}`
         });
      } else {
         return m.reply(`Send an image or video with the caption ${prefix + command} or reply to an image that has been sent`);
      }
   },
   limit: 2
};
