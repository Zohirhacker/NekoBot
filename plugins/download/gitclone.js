const fetch = require('node-fetch');
exports.default = {
   names: ['Downloader'],
   tags: ['gitclone'],
   command: ['git', 'gitclone'],
   start: async (m, {
      conn,
      text,
      args,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`link githubnya mana?\n*Contoh:*\n${prefix+command} https://github.com/ruhend2001/maleficent`)
      let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
      let linknya = text
      if (!regex1.test(linknya)) return m.reply('link salah!');
      let [, user, repo] = args[0].match(regex1) || []
      repo = repo.replace(/.git$/, '')
      let url = `https://api.github.com/repos/${user}/${repo}/zipball`
      let filename = (await fetch(url, {
         method: 'HEAD'
      })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
      conn.adReply(m.chat, `*Mohon tunggu*\n*sedang mengirim repository...*`, cover, m).then(() => {
         conn.sendFile(m.chat, url, '', m, {
            document: true,
            fileName: filename, 
            mimetype: 'application/zip'
         })
      })
   },
   limit: true,
   premium: false
};