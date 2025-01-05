exports.default = {
   names: ['Owner'],
   tags: ['setppgc'],
   command: ['setppgc', 'setppgroup'],
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
            await conn.updateProfilePicture(m.chat, media);
            m.reply(`Successfully replaced PP Group`)
         } catch (e) {
            console.log(e)
            m.reply(`An error occurred, try again later\n${e}`)
         }
      } else {
         return m.reply(`Send an image with the caption *${prefix + command}* or tag the image that has been sent`)
      }
   },
   admin: true,
   group: true
};