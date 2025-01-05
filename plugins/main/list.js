exports.default = {
   names: ['Main Menu'],
   tags: ['list'],
   command: ['list'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      Format
   }) => {
      //kalo mau buat list message contohnya kaya gini kostum sendiri ke plugin lain
      let caption = `👋 Hai @${m.sender.split('@')[0]}\n` //your text
      caption += `This Is Example List Message`
      let sections = [{
         title: 'Example',
         rows: [
            {
               title: 'Menu Tes',
               description: `Menampilkan Example Ping`,
               id: '.ping'
            },
            {
               title: 'Menu Info',
               description: `Script Bot`,
               id: '.sc'
            }
         ]
      }]
      let listMessage = {
         title: 'Select Here',
         sections
      }
      /* isMedia: true 
       * with media
       * isMedia:
       * false just list
       */
      conn.sendList(m.chat, caption, listMessage, m, {
         isMedia: true,
         media: {
            image: { //image or video
               url: cover //your url example 'https://photo.jpg'
            }
         }
      })
   }
};
