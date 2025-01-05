const { ytmp3 } = require('ruhend-scraper');
exports.default = {
   names: ['Downloader'],
   tags: ['ytmp3'],
   command: ['ytmp3', 'yta', 'ytaudio'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      Format
   }) => {
      if (!text) return m.reply(`Masukan kontolnya! \nContoh: ${prefix+command} https://youtu.be/MvsAesQ-4zA`);
      m.react("🕗");
      const { title, audio, thumbnail } = await ytmp3(text);
      conn.adReply(m.chat, loading, thumbnail || cover, m);
      const media = await Format.mp3(audio);      
      conn.sendFile(m.chat, media, '', m, {
         document: true,
         fileName: `${title}~Ruhend-MD.mp3`,
         mimetype: 'audio/mpeg'
      })
   },
   limit: 3,
   premium: false
}