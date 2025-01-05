exports.default = {
   names: ['Tools'],
   tags: ['toaudio'],
   command: ['tomp3', 'toaudio', 'toptt', 'tovn'],
   start: async (m, {
      conn,
      prefix,
      command,
      mime,
      quoted,
      Format
   }) => {
      if (/audio|video|document/.test(mime) || m.mtype === 'videoMessage' || m.mtype === 'documentMessage' || m.mtype === 'audioMessage') {
         conn.adReply(m.chat, loading, cover, m);
         let media = await quoted.download()
         let audio = await Format.mp3(media);
         conn.sendFile(m.chat, audio, {
            mimetype: 'audio/mp4',
            ptt: true,
            quoted: m
         })
      } else {
         return m.reply(`reply to video or send video with message ${prefix+command}`)
      }
   },
   limit: 2
};
