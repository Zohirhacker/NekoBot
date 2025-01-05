exports.default = {
   names: ['Owner'],
   tags: ['setppbot', 'setpp'],
   command: ['setppbot', 'setpp'],
   start: async (m, {
      conn,
      command,
      prefix,
      mime,
      quoted
   }) => {
      if (/image/.test(mime) || m.mtype === 'imageMessage') {
         try {
            const media = await quoted.download()
            await conn.updateProfilePicture(conn.decodeJid(conn.authState.creds.me.id), media);
            m.reply(`Sukses mengganti PP Bot`)
         } catch (e) {
            console.log(e)
            m.reply(`Terjadi kesalahan, coba lagi nanti\n${e}`)
         }
      } else {
         return m.reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
      }
   },
   owner: true
};