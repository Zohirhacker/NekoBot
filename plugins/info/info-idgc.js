exports.default = {
   names: ['Info'],
   tags: ['idgc'],
   command: ['idgc', 'id'],
   start: (m) => {
      m.reply(m.chat);
   }
}