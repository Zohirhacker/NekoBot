module.exports = {
   start: (m, {
      budy
   }) => {
      if (budy.match('assalamualaikum') || budy.match('assalamu\'alaikum')) {
         m.reply('Waalaikumsalam')
      }
   }
}