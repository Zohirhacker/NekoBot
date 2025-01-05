module.exports = {
   start: async (m, {
      conn,
      budy,
      Format,
      isAdmins,
      isOwner,
      isBotAdmins
   }) => {
      try {
         if (db.chats[m.chat].antilink && !m.fromMe && !m.isBaileys) {
            if (budy.includes('https://chat.whatsapp.com')) {
               if (isAdmins) return m.reply('You have the authority to send the link as an admin.');
               if (isOwner) return m.reply('Sending the link is something you are free to do since you are my owner.');                              
               conn.adReply(m.chat, `@${m.sender.split("@")[0]} Terdeteksi Mengirim Kata Kata Aneh!`, cover, m, {
                  mentions: [m.sender]
               }).then(async () => {
                  if (isBotAdmins) {
                     const url = await conn.groupInviteCode(m.chat);                  
                     if (!budy.includes(url)) {
                        conn.sendMessage(m.chat, {
                           delete: {
                              remoteJid: m.chat,
                              fromMe: false,
                              id: m.key.id,
                              participant: m.sender
                           }
                        });
                        // await Format.sleep(2000);
                        // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');                  
                     } else if (budy.includes(url)) {
                        return m.reply('Oh Ternyata Link Group Ini Hampir Ajh Aku Delete and Kick');
                     } 
                  }
               });            
            } else if (m.msg?.contextInfo?.externalAdReply?.sourceUrl.match('https://chat.whatsapp.com') && !m.fromMe) {
               conn.sendMessage(m.chat, {
                  delete: {
                     remoteJid: m.chat,
                     fromMe: false,
                     id: m.key.id,
                     participant: m.sender
                  }
               });
            }
         } 
      } catch {
         return false
      }
   }
};