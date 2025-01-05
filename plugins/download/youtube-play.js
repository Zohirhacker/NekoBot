const fetch = require('node-fetch');
const { ytmp3, ytsearch } = require('ruhend-scraper');
exports.default = {
   names: ['Downloader'],
   tags: ['play', 'song', 'lagu'],
   command: ['play', 'song', 'lagu'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      Format
   }) => {
      if (!text) return m.reply(`Enter the song you want to search\nexample ${prefix+command} papinka here and there I miss you or .play link https://youtu.be/A5Jj6Ib91zA`);
      const vid = (await ytsearch(text)).video[0]
      const { title, description, videoId, durationH, viewH, publishedTime } = vid; 
      if (!vid) return m.reply('Not found, try to reverse the title and author');
      const url = `https://youtu.be/${videoId}`;
      const thumb = `https://i.ytimg.com/vi/${videoId}/0.jpg`;
      let play = `🎧 〔 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐏𝐋𝐀𝐘 〕\n`
      play += ` ${javi} *Data Found*\n`
      play += ` ⬡ Title: ${title}\n`
      play += ` ⬡ duration: ${durationH}\n`
      play += ` ⬡ Views: ${viewH}\n`
      play += ` ⬡ Upload: ${publishedTime}\n`
      play += ` ⬡ Link: ${url}\n\n`
      play += ` *Audio loading is being sent...*`
      conn.adReply(m.chat, play, thumb, m);
      const { audio } = await ytmp3(url);      
      const pretty = await Format.mp3Play(audio);
      conn.sendFile(m.chat, pretty, title, m, {
         mimetype: 'audio/mp4',
         fileName: title,
         contextInfo: {
            externalAdReply: {
               mediaType: 2,
               mediaUrl: url,
               title: title,
               body: setting.botName,
               sourceUrl: url,
               thumbnail: await (await fetch(thumb)).buffer()
            }
         }
      })
   },
   limit: 3
}