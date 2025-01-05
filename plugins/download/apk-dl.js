const { download } = require('../../lib/src/apk/apk.js');
exports.default = {
   names: ['Downloader'],
   tags: ['apk'],
   command: ['apk', 'apkdl'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`Enter the apk you want to search for examples of ${prefix+command} facebook lite`);
      let res = await download(text);
      m.reply(loading);
      let icon = res.icon
      let paket = res.package
      let size = res.size
      let nama = res.name
      let up = res.lastup
      let file = res.dllink
      let caption = ` 𝐀𝐏𝐊 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃\n`      
      caption += ` ${java} Name : ${nama}\n`
      caption += ` ${java} Update : ${up}\n`
      caption += ` ${java} Name package : ${paket}\n`
      caption += ` ${java} Size : ${size}\n\n`
      caption += ` *Sending File...*`
      conn.adReply(m.chat, caption, icon, m, {
         showAds: true
      }).then(() => {
         conn.sendFile(m.chat, file, '', m, {
            document: true,
            fileName: nama + '.apk', 
            mimetype: 'application/vnd.android.package-archive'
         })
      })
   },
   limit: 5,
   premium: false
};
