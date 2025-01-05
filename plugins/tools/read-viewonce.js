const { downloadContentFromMessage } = require('@adiwajshing/baileys');
exports.default = {
   names: ['Tools'],
   tags: ['rvo', 'readviewonce', 'lihat'],
   command: ['rvo', 'readviewonce', 'lihat'],
   start: async (m, {
      conn
   }) => {
      if (!m.quoted) return m.reply('balas pesan 1x lihatnya');      
      let type = Object.keys(m.quoted.message)[0];
      let q = m.quoted.message[type];
      let caption = q.caption || ''
      let media = await downloadContentFromMessage(q, type === 'imageMessage' ? 'image' : 'video' || type === 'audioMessage' ? 'audio' : 'audio') 
      let buffer = Buffer.from([])
      for await (let chunk of media) {
         buffer = Buffer.concat([buffer, chunk])
      }
      conn.sendFile(m.chat, buffer, {
         ptt: true,
         caption: caption,
         quoted: m
      })
   },
   limit: 5
};