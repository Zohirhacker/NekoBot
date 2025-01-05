//Sesuaikan Kalian Saja :v run bot jadi bot , panel vps blabalabal
exports.default = {
   names: ['Main Menu'],
   tags: ['harga', 'premium', 'price', 'sewa'],
   command: ['harga', 'premium', 'price', 'sewa', 'sewabot'],
   start: async (m, {
      conn
   }) => {
      let price = `*📑 List Harga Premium & Sewa* \n ${setting.botName}\n\n`
      price += `*🎗 Akses Premium*\n\n`
      price += `• 1 minggu 3000 bonus +1000 limit\n`
      price += `• 2 minggu 5000 bonus +3000 limit\n`
      price += `• 3 minggu 8000 bonus +5000 limit\n`
      price += `• 4 minggu 12.000 bonus +10000 limit++\n\n`
      price += `✅ *_priority your database will keep until time has run out_* \n*_Bilang Ke Owner Jika Ingin Memperpanjang agar database kamu di keep dengan aman_*\n`
      let sewa = `*🎭 Akses Bot Join Group* \n*+bonus limit untuk penyewa*\n\n`
      sewa += `• 1 minggu 4000 bonus +1000 limit (1 Group)\n`
      sewa += `• 2 minggu 8000 bonus +2000 limit (3 Groups Maximal)\n`
      sewa += `• 3 minggu 12000 bonus +5000 limit (5 Groups Maximal)\n`
      sewa += `• 4 minggu 15000 bonus +10000 limit++ (10 Groups Maximal)\n\n`
      let hub = `*📢 Hubungi Owner* \n@${setting.contact}\n`
      conn.adReply(m.chat, price + '\n' + sewa + hub, cover, m, {
         showAds: true,
         mentions: [`${setting.contact}@s.whatsapp.net`]
      });
   }
};
