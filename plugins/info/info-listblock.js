exports.default = {
   names: ['Info'],
   tags: ['listblock'],
   command: ['listblock', 'listblok'],
   start: async (m, {
      conn      
   }) => {
      const data = (await conn.fetchBlocklist()).map(v => v.replace('@s.whatsapp.net', '')).map(v => '@' + v.substring(0));
      let teks = `${zw} List Block ${namebot}\nTotal Block ${data.length}\n\n`
      data.forEach(user => {
         teks += `${java} ${user}\n`
      });
      const mention = conn.parseMention(data.toString());
      conn.adReply(m.chat, teks.trim(), cover, m, {
         mentions: mention
      })
   }
}