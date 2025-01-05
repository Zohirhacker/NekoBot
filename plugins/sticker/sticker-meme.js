exports.default = {
   names: ['Maker'],
   tags: ['stickermeme', 'smeme'],
   command: ['stickermeme', 'smeme'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      mime,
      quoted,
      Format
   }) => {
      let pack = setting.botName
      let own = setting.footer
      if (!/webp/.test(mime) || /image/.test(mime) || m.mtype === 'imageMessage') {
         if (!text) return m.reply(`Balas Atau Kirim image dengan caption ${prefix + command} text1|text2`)                  
         if (!quoted) return
         let up = text.split('|')[0] ? text.split('|')[0] : '-'
         let down = text.split('|')[1] ? text.split('|')[1] : '-'
         let content = await conn.downloadAndSaveMediaMessage(quoted)
         conn.adReply(m.chat, loading, cover, m);
         let res = await Format.upload2(content)
         let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(up)}/${encodeURIComponent(down)}.png?background=${res}`
         conn.sendImageAsSticker(m.chat, smeme, m, {
            packname: pack,
            author: own
         });
      } else {
         return m.reply(`Balas Atau Kirim image dengan caption ${prefix + command} text1|text2`)
      }
   },
   limit: 5,
   premium: false
};