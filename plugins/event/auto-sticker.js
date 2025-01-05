module.exports = {
   start: async (m, {
      conn,
      quoted,
      command
   }) => {
      if (autodl && m.mtype === 'imageMessage') {
         let ignore = ['remini', 'hd', 'sticker', 's', 'stiker'];
         if (ignore.includes(command) && !m.fromMe) return m.react('❎', m.chat);
         if (!m.fromMe && db.users[m.sender].limit < 0) return m.reply(mess.limit);
         m.react('🐽');
         let buffer = await quoted.download();
         conn.sendImageAsSticker(m.chat, buffer, m, {
            packname: setting.botName,
            author: setting.footer
         });
         db.users[m.sender].limit -= 2
         m.reply(limit_message.replace('%limit', 2))
      }
   }
};
