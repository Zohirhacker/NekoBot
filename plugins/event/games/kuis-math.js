const rewards = {
   limit: 10,
   uang: 30
}
module.exports = {
   start: async (m, {
      conn,
      budy
   }) => {
      const kuismath = db.games.kuismath
      if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && budy && !budy.includes('.kuishmath') && !budy.includes('.math') && !budy.includes('.matematika') && !m.isBaileys) {
         const jawaban = kuismath[m.sender.split('@')[0]];
         if (budy.toLowerCase() == jawaban) {
            delete kuismath[m.sender.split('@')[0]];
            conn.adReply(m.chat, `*Kuis Matematika*\n\nJawaban Benar\nHadiah :\n *+${rewards.limit} Limit*\n *+${rewards.uang} Uang*\n\nIngin bermain lagi? \nketik .math mode\nPilih Mode:\n- ${Object.keys(modes).join(' \n- ')}\n\nContoh penggunaan:\n\n.math easy`, setting.thumbnail, m).then(async () => {
               db.users[m.sender].limit += rewards.limit
               db.users[m.sender].uang += rewards.uang               
            });
         } else {
            return m.reply('Salah!');
         }
      } 
   }
};
const modes = {
   noob: [-3, 3, -3, 3, '+-', 15000, 10],
   easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
   medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
   hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
   extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
   impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
   impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
}