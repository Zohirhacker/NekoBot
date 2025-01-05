const { ytsearch } = require('ruhend-scraper');
exports.default = {
   names: ['Downloader'],
   tags: ['ytsearch'],
   command: ['ytsearch', 'yts'], 
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`Enter the information you want to search\nexample ${prefix+command} Noureddine ouafy`);
      let { video, channel } = await ytsearch(text)      
      let sthumb = "https://qu.ax/OcWmv.jpeg"
      let teks = [...video, ...
         channel
      ].map(v => {
         switch (v.type) {
            case 'video':
               return `
      🎀 *${v.title}* 
      🔗 ${v.url}
      🕒 Duration: ${v.durationH}
      📅 Uploaded ${v.publishedTime}
      📈 ${v.view} views`.trim()
            case 'channel':
               return `
      ╭──────━• *CHANNEL*
      │🎀 *${v.channelName}* 
      │🔗 *${v.url}*
      │📛 _${v.subscriberH} Subscriber_
      │🎥 ${v.videoCount} video
      ┗──────━•`.trim()
         }
      }).filter(v => v).join('\n\n───────────────────\n\n');
      conn.adReply(m.chat, loading, cover, m).then(() => {
         conn.adReply(m.chat, `*Copy the YouTube link*\n*then type the .ytmp3 link*\n*If you want the video, type the .ytmp4 link*\n\n${javi} 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐒𝐄𝐀𝐑𝐂𝐇 ${javi} \n\n` + teks.trim(), sthumb, m, {
            showAds: true
         })
      })
   },
   limit: true
};