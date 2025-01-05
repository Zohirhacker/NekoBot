exports.default = {
   names: ['Main Menu'],
   tags: ['hyd'],
   command: ['hyd'],
   start: (m, {
      conn,
   }) => {
      //link is from you, you can costume it
      let caption = 'Tes'
      let media = cover // media is video or photo
      let hyd = [ //add some links 
         ['Google', 'https://www.google.com'],
         ['Facebook', 'https://www.facebook.com'],
         ['Instagram', 'https://www.instagram.com/ru_hend_'],
         ['Youtube', 'https://www.youtube.com/'],
         ['Tiktok', 'https://www.tiktok.com/mr.beast']
      ]                                       
      conn.sendHydrated(m.chat, caption, media, m, hyd) 
    }   
};

