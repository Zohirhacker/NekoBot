const fs = require('fs');
const { exec } = require('child_process');
exports.default = {
   names: ['Maker'],
   tags: ['toimage'],
   command: ['toimg', 'toimage'],
   start: async (m, {
      conn,
      prefix,
      quoted,
      mime,
      command,
      Format
   }) => {
      if (!/webp|image/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`);
      const media = await conn.downloadAndSaveMediaMessage(quoted);
      const ran = `tmp/${Date.now()}.png`;
      conn.adReply(m.chat, loading, cover, m);
      exec(`ffmpeg -i ${media} ${ran}`, (err) => {
         if (err) return m.reply(`${err}`);
         const buffer = fs.readFileSync(ran);
         conn.sendFile(m.chat, buffer, {
            caption: "Berhasil Ke Image ✔",
            quoted: m
         })
      })
   },
   limit: true
};