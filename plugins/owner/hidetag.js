exports.default = {
   names: ['Owner'],
   tags: ['hidetag'],
   command: ['ht', 'hidetag'],
   start: async (m, {
      conn,
      text,
      participants
   }) => {
      let mem = [];
      participants.map(i => mem.push(i.id))
      await conn.adReply(m.chat, text ? text : '', cover, m, {
         showAds: true,
         mentions: mem
      })
   },
   group: true,
   admin: true
};