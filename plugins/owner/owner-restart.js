exports.default = {
   names: ['Owner'],
   tags: ['restart'],
   command: ['restart', 'reset', 'reboot', 'rb'],
   start: async (m) => {
      await m.reply(`Merestart bot......`);
      setTimeout(() => {
         process.send('reset');
      }, 1000);
   },
   owner: true
};