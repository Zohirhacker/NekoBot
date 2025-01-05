const fs = require('fs');
exports.default = {
   names: ['Tools'],
   tags: ['tourl', 'upload'],
   command: ['tourl', 'upload'],
   start: async (m, {
      conn,
      prefix,
      command,
      mime,
      quoted,
      Format
   }) => {
      if (/image/.test(mime) || m.mtype === 'imageMessage' ||
         /audio/.test(mime) || m.mtype === 'audioMessage' ||
         /webp/.test(mime) || m.mtype === 'stickerMessage' ||
         /video/.test(mime) || m.mtype === 'videoMessage') {
         let mediaType, fileExt;
         if (/webp/.test(mime) || m.mtype === 'stickerMessage') {
            mediaType = 'sticker';
            fileExt = '.webp';
         } else if (/image/.test(mime) || m.mtype === 'imageMessage') {
            mediaType = 'image';
            fileExt = '.jpeg';
         } else if (/audio/.test(mime) || m.mtype === 'audioMessage') {
            mediaType = 'audio';
            fileExt = '.mp3';
         } else if (/video/.test(mime) || m.mtype === 'videoMessage') {
            mediaType = 'video';
            fileExt = '.mp4';
         } 
         let media = await conn.downloadAndSaveMediaMessage(quoted)
         conn.adReply(m.chat, loading, cover, m);
         let buffer_up = fs.readFileSync(media);
         let rand2 = `tmp/` + Format.getRandom(`${fileExt}`);
         fs.writeFileSync(`./${rand2}`, buffer_up);
         let { name, url, size } = await Format.upload(rand2);
         let sizeNy = Format.bytesToSize(size);
         let caption = `*Success Upload*\n`
         caption += `${java} *Url :* ${url}\n`
         caption += `${java} *Name :* ${name}\n`
         caption += `${java} *Size :* ${sizeNy}\n`
         caption += `${java} *Type:* ${mediaType.charAt(0).toUpperCase() + mediaType.slice(1)}`
         conn.adReply(m.chat, caption, cover, m);
      } else {
         return m.reply(`Reply to Media or Send Media with Caption ${prefix}upload or ${prefix}tourl`);
      }
   },
   limit: 5,
   register: true,
   premium: false
};
