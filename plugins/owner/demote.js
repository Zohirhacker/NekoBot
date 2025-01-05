exports.default = {
   names: ['Owner'],
   tags: ['demote'],
   command: ['demote'],
   start: async (m, {
      conn,
      mentionUser
   }) => {
      if (mentionUser.length !== 0) {
         await conn.groupParticipantsUpdate(m.chat, [mentionUser[0]], "demote");
         m.reply(`Now ${mentionUser} No Longer Admin`)
      } else {
         return m.reply(`Tag the Admin you want to demote`)
      }
   },
   group: true,
   admin: true
};