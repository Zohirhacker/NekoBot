let rewards = {
   limit: 15,
   uang: 30
}
module.exports = {
   start: async (m, {
      conn,
      budy
   }) => {
      let tictactoe = db.games.tictactoe
      let room = Object.values(tictactoe).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')      
      let parseMention = (text = '') => {
         return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
      }
       if (room) {
         let ok
         let isWin = !1
         let isTie = !1
         let isSurrender = !1
         if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
         isSurrender = !/^[1-9]$/.test(m.text)
         if (m.sender !== room.game.currentTurn) { // nek wayahku
            if (!isSurrender) return !0
         }
         if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
            m.reply({
               '-3': 'Game telah berakhir',
               '-2': 'Invalid',
               '-1': 'Posisi Invalid / Salah',
               0: 'Posisi Invalid / Salah',
            } [ok])
            return !0
         }
         if (m.sender === room.game.winner) isWin = true
         else if (room.game.board === 511) isTie = true
         let arr = room.game.render().map(v => {
            return {
               X: '❌',
               O: '⭕',
               1: '1️⃣',
               2: '2️⃣',
               3: '3️⃣',
               4: '4️⃣',
               5: '5️⃣',
               6: '6️⃣',
               7: '7️⃣',
               8: '8️⃣',
               9: '9️⃣',
            } [v]
         })
         if (isSurrender) {
            room.game._currentTurn = m.sender === room.game.playerX
            isWin = true
         }
         let winner = isSurrender ? room.game.currentTurn : room.game.winner
         let str = `Room ID: ${room.id}\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n${isWin ? `\n\n@${winner.split('@')[0]} Menang!\nGame berakhir\n@${winner.split('@')[0]} Mendapat Hadiah :\n+${rewards.limit} limit 🎟\n+${rewards.uang} uang 💰\n` : isTie ? `Game berakhir gak ada yang menang / seri` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}\n❌: @${room.game.playerX.split('@')[0]}\n⭕: @${room.game.playerO.split('@')[0]}\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`
         if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
            room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
         if (room.x !== room.o) await conn.sendText(room.x, str, m, {
            mentions: parseMention(str)
         })
         await conn.sendText(room.o, str, m, {
            mentions: parseMention(str)
         })
         if (isTie || isWin) {
            if (isWin) {
               db.users[winner].limit += rewards.limit
               db.users[winner].uang += rewards.uang
            }
            delete tictactoe[room.id]
         }
      }
   }
};