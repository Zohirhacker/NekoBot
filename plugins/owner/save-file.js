const fs = require('fs');
exports.default = {
   names: ['Owner'],
   tags: ['simpan'],
   command: ['sf', 'simpan'],
   start: async (m, {
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`contoh ${prefix+command} plugins/cinta.js atau file yang ingin kamu save`);
      let path = `${text}`;
      await Promise.all([fs.writeFileSync(path, m.quoted.text), await m.reply(`tersimpan di ${path}`)]);
   },
   owner: true
};
