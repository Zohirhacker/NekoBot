module.exports = {
   start: (m, {
      conn
   }) => {   
      if (!m.fromMe && m.isBaileys && m.msg.ptt) {
         return conn.sendMessage(m.chat, {
            delete: {
               remoteJid: m.chat,
               fromMe: false,
               id: m.key.id,
               participant: m.sender
            }
         })
      }
   }
}