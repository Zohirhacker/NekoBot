exports.default = {
   names: ['Owner'],
   tags: ['updatename', 'ubahnama'],
   command: ['updatename', 'ubahnama'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) throw `Masukan nama profil nya contoh: \n${prefix+command} My Bot`
      await conn.updateProfileName(`${text}`);
      m.reply(`Sukses Menggantikan Nama Profil Menjadi ${text}`);
   },
   owner: true
};