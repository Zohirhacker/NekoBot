exports.default = {
   names: ['Main Menu'],
   tags: ['bost', 'boost', 'percepat'],
   command: ['bost', 'boost', 'percepat'],
   start: (m) => {
      m.reply('_Boosting..._').then(() => m.edReply('Sukses Mempercepat Bot', 500));
   }
}