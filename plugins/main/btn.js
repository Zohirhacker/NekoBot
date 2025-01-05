exports.default = {
   names: ['Main Menu'],
   tags: ['button'],
   command: ['button'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      Format
   }) => {
      text = text || 'contoh'
      let caption = `Hay Ka @${m.sender.split('@')[0]}` // Pesan nya atau caption
      let media = cover //media photo or video 
      //button disini hanya contoh saja dan bisa kalian buat sesuai keinginan dan terapkan ke plugins lain dan juga total buttonya
      let button = [
         ['One', '.ping'], //text atau command dari kita, tanda koma perhatikan biar ga eror
         ['Two', '.ping ' + text],  //text dari user    
         ['Three', '.gimage tobrut telanjang bulat']
      ] 
      conn.sendButton(m.chat, caption, media, m, button)
   }
}
