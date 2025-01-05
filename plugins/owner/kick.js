exports.default = {
   names: ['Owner'],
   tags: ['kick'],
   command: ['kick'],
   start: async (m, {
      conn,
      mentionUser,
      mentionByReply
   }) => {
      if (mentionUser.length !== 0) {
         await conn.groupParticipantsUpdate(m.chat, [mentionUser[0]], "remove");
         m.reply(`Delete Successfully ${mentionUser} From This Group`)
      } else if (mentionByReply) {
         await conn.groupParticipantsUpdate(m.chat, [mentionByReply], "remove");
         m.reply(`Delete Successfully ${mentionByReply} From This Group`)
      } else {
         return m.reply(`Tag the one you want to kick`)
      }
   },
   group: true,
   admin: true
};