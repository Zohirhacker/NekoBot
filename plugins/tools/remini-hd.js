exports.default = {
   names: ['Tools'],
   tags: ['remini', 'hd'],
   command: ['remini', 'hd', 'hdr'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      mime,
      quoted,
      Format
   }) => {
      if (/image/.test(mime) || m.mtype === 'imageMessage') {
         m.react('🕒');
         let content = await conn.downloadAndSaveMediaMessage(quoted);
         conn.adReply(m.chat, loading, cover, m);
         let data = await Format.HD2(content);         
         conn.sendFile(m.chat, data, {
            caption: `${star} Succeed`,
            quoted: m
         })
      } else {
        return m.reply(`Reply or send an image with caption ${prefix+command}`)
      }
   },
   limit: 5,
   premium: false,   
   disable: false
};
