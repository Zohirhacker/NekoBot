exports.default = {
   names: ['Owner'],
   tags: ['kickall'],
   command: ['kickall'],
   start: async (m, {
      conn,
      Format,
      participants
   }) => {
      const member = participants.map(a => a.id);
      const isBot = conn.decodeJid(conn.user.id);
      for await (let i of member) {
         if (i !== isBot) {
            await Format.sleep(2500);
            await conn.groupParticipantsUpdate(m.chat, [i], 'remove');
         }
      }
   },
   group: true,
   admin: true,
   botAdmin: true
};