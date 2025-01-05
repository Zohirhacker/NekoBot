const rewards = {
   limit: 10,
   uang: 30
}
module.exports = {
   start: async (m, {
      conn,
      budy,
      Format
   }) => {
      const family100 = db.games.family100
      if (('family100' + m.chat in family100) && budy && !budy.includes('.family100') && !budy.includes('.family') && !m.isBaileys) {
         const room = family100['family100' + m.chat]
         const teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
         const isSurender = /^((me)?nyerah|surr?ender)$/i.test(budy)
         if (!isSurender) {
            const index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
            if (room.terjawab[index]) return !0
            room.terjawab[index] = m.sender
         }
         const parseMention = (text = '') => {
            return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
         }
         const isWin = room.terjawab.length === room.terjawab.filter(v => v).length
         const caption = `Jawablah Pertanyaan Berikut :\n\n*${room.soal}*\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''} ${isWin ? `\n*Selamat 🎉 Semua Jawaban Terjawab*\n*Setiap Jawaban Benar Bernilai*\n*+ ${rewards.limit} limit* 🎟\n*+ ${rewards.uang} Uang* 💰\n` : isSurender ? 'Menyerah!' : ''}\n${Array.from(room.jawaban, (jawaban, index) => {
         return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
            }).filter(v => v).join('\n')}
         ${isSurender ? '' : ` `}`.trim()
         conn.sendText(m.chat, caption, m, {
            contextInfo: {
               mentionedJid: parseMention(caption)
            }
         }).then(mes => {
            return family100['family100' + m.chat].pesan = mesg
         }).catch(_ => _);
         const users = parseMention(caption)
         const givingAway = async () => {
            for (let i of users) {
               await Format.sleep(2000)
               db.users[i].limit += rewards.limit
               db.users[i].uang += rewards.uang
            }
         }   
         if (isWin) {
            await givingAway();
            delete family100['family100' + m.chat];
         } else if (isSurender) {
            delete family100['family100' + m.chat];
         }
      }
   }
};
