exports.default = {
   names: ['Info'],
   tags: ['totalgroup', 'totalgc', 'listpc', 'listgc'],
   command: ['totalgroup', 'totalgc', 'listpc', 'listgc'],
   start: async (m, {
      conn,
      store,
      Format     
   }) => {  
      m.react('🌀').then(() => m.reply('Obtaining data please wait...'));    
      let group = Object.keys(db.chats);      
      let count = 0;      
      let caption = '';
      for await (let i of group) {
         try {
            const accept = await conn.groupMetadata(i);
            if (!accept) continue
            count += 1;
         } catch (e) {
            delete db.chats[i]
            await Format.sleep(3000)
         }
      };      
      let teks_gc = `*Total Data Chat ${setting.botName}*\nTotal Group: ${count} group\n\n`            
      for await (let i of Object.keys(db.chats)) {                  
         const nama = db.chats[i].name
         teks_gc += `*ID:* ${i}\n*Name:* ${nama}\n\n`         
      }
      const pc = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
      let teks_pc = `*List Personal Chat*\nTotal Chat : ${pc.length} Chat\n\n`
      for (let i of pc) {
         const pesan = (await store.chats.all().filter(v => v.id === i)[0]).unreadCount
         const nama = store.messages[i].array[0].pushName
         teks_pc += `*User :* @${i.split('@')[0]}\n*Number :* +${i.split('@')[0]}\n*Total Pesan :* ${pesan + pesan} pesan\n\n`
      }      
      caption += teks_gc
      caption += teks_pc
      conn.adReply(m.chat, caption.trim(), cover, m, {
         mentions: conn.parseMention(caption)
      });
   }
}