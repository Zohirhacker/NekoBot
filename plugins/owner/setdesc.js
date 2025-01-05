exports.default = {
   names: ['Owner'],
   tags: ['setdescgc'],
   command: ['setdescgc', 'setdescriptiongroup'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (text) {
         await conn.groupUpdateDescription(m.chat, text);
         m.reply(`Group Description Has Been Changed To${text}`);
      } else {
         return m.reply(`Enter a description of the group, for example: \n${prefix+command} Rules My Group`); 
      }
   },
   group: true,
   admin: true
};