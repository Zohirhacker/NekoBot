exports.default = {
   names: ['Main Menu'],
   tags: ['slide'],
   command: ['slide'],
   start: async (m, {
      conn
   }) => {
      const caption = 'Hy There'
      const media = cover
      //example media is cover you can replace with your photos
      //you can make multi galery and text each galleries
      const galery = [
         ['1', '', cover, []], 
         ['2', '', media, []],
         ['3', '', media, []],
         ['4', '', media, []],
         ['5', '', media, []]
      ]     
      conn.sendGalery(m.chat, caption, m, galery)
   }
};