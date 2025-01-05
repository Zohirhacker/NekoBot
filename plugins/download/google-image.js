const cheerio = require('cheerio');
const fetch = require('node-fetch');
exports.default = {
   names: ['Internet'],
   tags: ['googleimage', 'gimage', 'gambar', 'image'],
   command: ['googleimage', 'gimage', 'gambar', 'image'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`Use example ${prefix}${command} Janda Gila\nMasukkan Text Yang Ingin Dicari !`)
      const res = await googleImage(text)
      conn.adReply(m.chat, loading, cover, m);
      const Index = Math.floor(Math.random() * res.length);
      const image = res[Index];
      let gimage = `${javi} 𝐆𝐎𝐎𝐆𝐋𝐄 𝐈𝐌𝐀𝐆𝐄\n`
      gimage += `🔎 *Pencarian:* ${text}\n`
      gimage += `🌎 *Source:* Google\n\n> 1. Lanjut\n> 2. Stop`
      conn.sendFile(m.chat, image, gimage, m).then(() => {
         const event = db.users[m.sender].event_cmd
         const data = { 
            gimage: {
               status: true,
               search: text
            }
         }
         Object.assign(event, data);
      })
   },
   limit: 2
};

async function googleImage(query) {
   const data = await (await fetch(`https://www.google.com/search?q=${query}&tbm=isch`, {
      headers: {
         accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
         'accept-encoding': 'gzip, deflate, br',
         'accept-language': 'en-US,en;q=0.9,id;q=0.8',
         'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36'
      }
   })).text();
   const $ = cheerio.load(data);
   const pattern = /\[1,\[0,"(?<id>[\d\w\-_]+)",\["https?:\/\/(?:[^"]+)",\d+,\d+\]\s?,\["(?<url>https?:\/\/(?:[^"]+))",\d+,\d+\]/gm;
   const matches = $.html().matchAll(pattern);
   const decodeUrl = (url) => decodeURIComponent(JSON.parse(`"${url}"`));
   return [...matches]
   .map(({
      groups
   }) => decodeUrl(groups === null || groups === void 0 ? void 0 : groups.url))
   .filter((v) => /.*\.jpe?g|png$/gi.test(v));
}