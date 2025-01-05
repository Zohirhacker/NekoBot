const fs = require('fs');
exports.default = {
   names: ['Owner'],
   tags: ['database'],
   command: ['db', 'database', 'getdb'],
   start: async (m, {
      conn 
   }) => {
      const file = fs.readFileSync('./database.json');
      m.reply(`Tunggu sedang mengambil file database...`);    
      conn.sendMessage(m.chat, { document: file, caption: 'Berhasil Backup database', mimetype: 'application/json', fileName: 'database.json' }, { quoted: m });
   },
   owner: true
}
