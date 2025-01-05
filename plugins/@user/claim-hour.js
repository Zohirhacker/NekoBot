exports.default = {
   names: ['User Menu'],
   tags: ['hour'],
   command: ['hour', 'hourly'],
   start: async (m, {
      conn
   }) => {
      let hourly = 15;
      let currentTime = new Date().getTime();
      let lastHourTime = new Date(db.users[m.sender].lastHour).getTime();
      let timeDiff = Math.floor((currentTime - lastHourTime) / (1000 * 60 * 60));
      let remainingTime;
      if (timeDiff < 1) {
         remainingTime = 60 - (Math.floor((currentTime - lastHourTime) / (1000 * 60)) % 60);
      } else {
         db.users[m.sender].limit += hourly
         db.users[m.sender].lastHour = new Date().toJSON();
         const claim_hour = `Claim Perjam berhasil. Kamu mendapatkan ${hourly} Limit. Kamu bisa melakukan claim lagi dalam 1 jam mendatang.`
         return conn.adReply(m.chat, claim_hour, cover, m)
      }
      if (typeof remainingTime === "number") {
         return m.reply(`Kamu sudah melakukan claim dalam 1 jam terakhir. Tunggu ${remainingTime} menit lagi sebelum dapat melakukan claim kembali.\nkamu juga bisa claim uang  ketik .claimuang`);
      }
   },
   register: true
};