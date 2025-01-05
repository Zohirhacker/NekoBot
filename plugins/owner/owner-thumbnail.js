exports.default = {
   names: ['Owner'],
   tags: ['setthumbnail', 'setthumb', 'sthumb'],
   command: ['setthumbnail', 'setthumb', 'sthumb'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      mime,
      quoted,
      Format
   }) => {
      if (/image/.test(mime) || m.mtype === 'imageMessage') {
         const image = await conn.downloadAndSaveMediaMessage(quoted);
         m.reply(`Process...`);
         const link = await Format.upload2(image);
         db.settings.cover = link
         setting.thumbnail = link
         save_setting()         
         m.reply(`Sukses Mengganti Thumbnail Bot`);         
      } else {
         return m.reply(`Balas Atau Kirim image dengan caption ${prefix+command}`)
      }
   },
   owner: true
};
