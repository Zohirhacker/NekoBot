exports.default = {
   names: ['Owner'],
   tags: ['tagall'],
   command: ['tagall'],
   start: async (m, {
      conn,
      text,
      participants
   }) => {
      let teks_tagall = `〘 *Tag All* 〙\n\nOrdered By\n@${m.sender.split('@')[0]}\n\nHe said\n${text ? text : ''}\n\n`;
      let mem = [];
      participants.map(i => mem.push(i.id))
      for (let mem of participants) {
         teks_tagall += `• @${mem.id.split('@')[0]}\n`;
      }      
      await conn.adReply(m.chat, teks_tagall, cover, m, {
         showAds: true,
         mentions: mem
      })
   },
   group: true,
   admin: true
};