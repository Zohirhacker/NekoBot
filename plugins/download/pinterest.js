const cheerio = require('cheerio');
const fetch = require('node-fetch');
const { lookup } = require('mime-types');
const { URL_REGEX } = require('@adiwajshing/baileys');
exports.default = {
   names: ['Downloader'],
   tags: ['pinterest'],
   command: ['pinterest', 'pin'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      text = text.endsWith('SMH') ? text.replace('SMH', '') : text
      if (!text) return m.reply(`contoh: ${prefix+command} Input Query / Pinterest Url`)
      const res = await Pinterest(text);
      const mime = await lookup(res);
      conn.adReply(m.chat, loading, cover, m);
      let pinterest = `${javi} 𝐏𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓\n`
      pinterest += `${java} Result From ${text}\n\n> 1. Lanjut\n> 2. Stop`       
      const down = async () => {
         conn.sendMessage(m.chat, {
            [mime.split('/')[0]]: {
               url: res
            },
            caption: `Succes Download: ${await shortUrl(res)}`
         }, {
            quoted: m,
            ...conn_bind
         });
      };
      text.match(URL_REGEX) ? down() : conn.sendFile(m.chat, res, pinterest.trim(), m).then(() =>  {
         const event = db.users[m.sender].event_cmd
         const data = { 
            pinterest: {
               status: true,
               search: text
            }
         }
         Object.assign(event, data);
      })
   },
   limit: 2,
   premium: false
};
async function shortUrl(url) {
   return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()
}
async function Pinterest(query) {
   if (query.match(URL_REGEX)) {
      const res = await fetch('https://www.expertsphp.com/facebook-video-downloader.php', {
         method: 'post',
         body: new URLSearchParams(Object.entries({
            url: query
         }))
      })
      const $ = cheerio.load(await res.text())
      const data = $('table[class="table table-condensed table-striped table-bordered"]').find('a').attr('href')
      if (!data) throw 'Can\'t download post :/'
      return data
   } else {
      const res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`)
      const json = await res.json()
      const data = json.resource_response.data.results
      if (!data.length) throw `Query "${query}" not found :/`
      return data[~~(Math.random() * (data.length))].images.orig.url
   }
};