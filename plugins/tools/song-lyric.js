const fetch = require('node-fetch');
exports.default = {
   names: ['tools'],
   tags: ['lyric', 'lirik'],
   command: ['lyric', 'lirik', 'lyrics'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`Use example ${prefix}${command} heaven when i held`);
      if (m.isBaileys) return
      conn.adReply(m.chat, loading, cover, m);
      let data = await (await fetch('https://widipe.com/lirik?text=' + text)).json();
      let result = data.result;
      let lyric = `*${java} Lyrics*: ${result.title}\n`
      lyric += `*${java} Artist*: ${result.artist}\n`
      lyric += `*${java} Url*: ${result.url}\n`
      lyric += `*${java} Lyric*: \n${result.lyrics}\n`      
      conn.adReply(m.chat, lyric, result.image, m);
   },
   limit: 2,
   premium: false
}