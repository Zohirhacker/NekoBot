const fetch = require('node-fetch');
module.exports = async (update, conn, opts, image) => {
   const { Welcome, Bye, Number } = opts
   const musicBye = "https://qu.ax/FtUzX.mp3"
   const musicWelcome = ["https://qu.ax/lGyFY.mp3", "https://qu.ax/tDlSH.mp3"]   
   if (update.action == 'remove') {
      conn.adReply(update.id, Bye, image, null, {
         mentions: [Number],
         manyForward: true
      });
      conn.sendFile(update.id, musicBye, {
         ptt: true,
         contextInfo: {
            mentionedJid: [Number],
            externalAdReply: {
               title: `Bye 👋 ${Number.split('@')[0]}`,
               mediaType: 1,
               showAdAttribution: false,
               thumbnailUrl: image,
               thumbnail: await (await fetch(image)).buffer(),
               sourceUrl: global.link_group
            }
         }
      })
   } else if (update.action == 'add') {
      const desc = (await conn.groupMetadata(update.id)).desc
      conn.adReply(update.id, `${Welcome}`, image, null, {
         mentions: [Number],
         manyForward: true
      });
      for (let music of musicWelcome) {
         await conn.sendFile(update.id, music, {
            ptt: true,
            contextInfo: {
               mentionedJid: [Number],
               externalAdReply: {
                  title: `Welcome 👋 ${Number.split('@')[0]}`,
                  mediaType: 1,
                  showAdAttribution: false,
                  thumbnailUrl: image,
                  thumbnail: await (await fetch(image)).buffer(),
                  sourceUrl: global.link_group
               }
            }
         })
      }
   }
}