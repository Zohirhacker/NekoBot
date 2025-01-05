const toxic = ['kontol', 'anj', 'kntl', 'anjing', 'bngst', 'bgst', 'bangsat', 'memek', 'mmk', 'njir', 'najis', 'anjir', 'jing', 'njing', 'kntl', 'kontol', 'babi', 'monyet', 'mnyt', 'jembut', 'jmbt', 'lol', 'tolol'];
const agree = ['lanjut', 'loli']
module.exports = {
   start: (m, {
      conn,
      budy
   }) => {
      try {
         if (db.chats[m.chat].antiToxic && toxic.some(word => budy.toLowerCase().includes(word))) {
            if (agree.some(v => budy.toLowerCase().includes(v))) return
            if (m.fromMe || m.isBaileys) return
            conn.adReply(m.chat, `Hey Ketikannya!`, cover, m);
         }
      } catch (e) {
         return false
      }
   }
}