exports.default = {
   names: ['Owner'],
   tags: ['mute', 'unmute'],
   command: ['mute', 'unmute'],
   start: async (m, {
      command
   }) => {
      if (command == 'mute') {
         db.chats[m.chat].mute = true
         m.reply('Berhasil mute di chat ini');
      } else if (command == 'unmute') {
         db.chats[m.chat].mute = false
         m.reply('Berhasil unmute di chat ini');
      }
   },
   owner: true
};