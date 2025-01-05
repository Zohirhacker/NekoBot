exports.default = {
   names: ['Owner'],
   tags: ['promote'],
   command: ['promote'],
   start: async (m, {
      conn,
      mentionUser
   }) => {
      if (mentionUser.length !== 0) {
         await conn.groupParticipantsUpdate(m.chat, [mentionUser[0]], "promote");
         m.reply(` Now${mentionUser} is become Admin`)
      } else {
         return m.reply(`Tags that you want to promote`)
      }
   },
   group: true,
   admin: true
};