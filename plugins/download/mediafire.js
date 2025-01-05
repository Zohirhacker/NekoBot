exports.default = {
   names: ['Downloader'],
   tags: ['mediafire'],
   command: ['mediafire', 'mf'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`Contoh:\n${prefix+command} https://www.mediafire.com/file/96mscj81p92na3r/images+(35).jpeg/file`);
      const isLinks = text.match(/(?:https?:\/{2})?(?:w{3}\.)?mediafire(?:com)?\.(?:com|be)(?:\/www\?v=|\/)([^\s&]+)/)
      if (!isLinks) return m.reply('Link yang kamu berikan tidak valid');
      const { link, link2, name, filetype, ext, upload, size } = await mediafire(`${isLinks}`);
      let isType = filetype.toLowerCase() + "/" + ext.toLowerCase()
      let mediaFire = ` ${zw} 𝐌𝐄𝐃𝐈𝐀𝐅𝐈𝐑𝐄\n\n`
      mediaFire += ` Nama : ${name}\n`
      mediaFire += ` Size : ${size}\n`
      mediaFire += ` Type : ${filetype} ${ext}\n\n`
      mediaFire += ` Sending File...\n`
      conn.adReply(m.chat, mediaFire, cover, m).then(() => {
         conn.sendFile(m.chat, link || link2, '', m, {
            document: true,
            fileName: name,
            mimetype: isType
         })
      })
   },
   limit: 5,
   premium: false
};
const fetch = require('node-fetch');
const cheerio = require('cheerio');
/*sometimes error cause ip address blocked by mediafire*/
async function mediafire(url) {
   try {
      let data = await fetch(`https://www-mediafire-com.translate.goog/${url.replace("https://www.mediafire.com/", "")}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`).then(res => res.text());
      let $ = await cheerio.load(data);
      let link = ($("#downloadButton").attr("href") || "").trim();
      let link2 = ($("#download_link > a.retry").attr("href") || "").trim();
      let $intro = $("div.dl-info > div.intro");
      let name = $intro.find("div.filename").text().trim();
      let filetype = $intro.find("div.filetype > span").eq(0).text().trim();
      let ext = /\(\.(.*?)\)/.exec($intro.find("div.filetype > span").eq(1).text())?.[1]?.trim() || "bin";
      let upload = $("div.dl-info > ul.details > li").eq(1).find("span").text().trim();
      let size = $("div.dl-info > ul.details > li").eq(0).find("span").text().trim();
      return {
         link,
         link2,
         name,
         filetype,
         ext,
         upload,
         size
      }
   } catch (e) {
      throw e
   }
}