const tts = require('../../lib/src/tts/index.js');
const host = 'https://translate.google.com';
exports.default = {
   names: ['Tools'],
   tags: ['tts', 'gtts'],
   command: ['tts', 'gtts'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) throw `ex:\n ${prefix + command} hello`;
      let parts = text.split(".");
      let region, write;
      if (parts.length > 1 && parts.length === 2) {
         region = text.slice(0, 2);
         write = parts.slice(1).join(" ");
      } else {
         region = 'ar';
         write = text
      }
      if (!parts) {
         const audio = await tts.getAudioUrl(text, {
            lang: 'ar',
            slow: false,
            host: host
         });
         conn.sendFile(m.chat, audio, {
            ptt: true,
            quoted: m
         });
      } else {
         const audio = await tts.getAudioUrl(write, {
            lang: region,
            slow: false,
            host: host
         });
         conn.sendFile(m.chat, audio, {
            ptt: true,
            quoted: m
         });
      }
   },
   limit: true
}