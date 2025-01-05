exports.default = {
   names: ['User Menu'],
   tags: ['profile', 'balance'],
   command: ['profile', 'my', 'me', 'balance', 'profil'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      isPremium
   }) => {
      let picture = await conn.profilePictureUrl(m.sender, 'image').catch(_ => cover);
      let prem = isPremium ? 'Aktif' : 'Tidak';
      let isRegister = db.users[m.sender].registered
      let reg = isRegister ? 'Sudah Daftar' : 'Belum Daftar';
      let limitUser = db.users[m.sender].limit
      let userData = db.users[m.sender]
      let tag = text.match(/@/g);
      m.react('😂')
      if (tag) {
         try {
            let numTag = text.replace('@', '').replace(prefix, '').replace(command, '').trim();
            let mention = `${numTag}@s.whatsapp.net`
            let pictureTag = await conn.profilePictureUrl(mention, 'image').catch(_ => cover);
            let userTag = db.users[mention]
            let isRegisterTag = db.users[mention].registered
            let limitUserTag = db.users[mention].limit
            let regTag = isRegisterTag ? 'Sudah Daftar' : 'Belum Daftar';
            let isPremiumTag = db.users[mention].premium
            let premTag = isPremiumTag ? 'Aktif' : 'Tidak';
            let _regtime = `${userTag.registeredTime === "" ? "" : '\n ‎ ‎ ‎ ‎ ‎ ‎ ' + userTag.registeredTime}`;
            let Other = `👤 *User Profile* @${numTag}\n`
            Other += `📝 Total Penggunaan Perintah\n ‎ ‎ ‎ ‎ ‎ ‎ Bot: ${userTag.hitCmd} Kali\n`
            Other += `🏷 Terdaftar: ${regTag}\n`
            Other += `🗓 Waktu Daftar:${_regtime}\n`
            Other += `📌 Premium: ${premTag}\n`
            Other += `📍 Nama: ${userTag.name}\n`
            Other += `💋 Umur: ${userTag.umur}\n`
            Other += `📎 Seri: ${userTag.seri}\n`
            Other += `🔖 Limit: ${limitUserTag}\n`
            Other += `💰 Uang: ${userTag.uang}\n`
            Other += `🛍 Kupon: ${userTag.kupon}\n`
            conn.adReply(m.chat, Other, pictureTag, m, {
               mentions: [mention],
               showAds: true
            });
         } catch {
            throw 'Profile Not Active'
         }
      } else if (!tag) {
         let Regtime = `${userData.registeredTime === "" ? "" : '\n ‎ ‎ ‎ ‎ ‎ ‎ ' + userData.registeredTime}`;
         let Profile = `👤 *User Profile* @${m.sender.split('@')[0]}\n`
         Profile += `📝 Total Penggunaan Perintah\n ‎ ‎ ‎ ‎ ‎ ‎ Bot: ${userData.hitCmd} Kali\n`
         Profile += `🏷 Terdaftar: ${reg}\n`
         Profile += `🗓 Waktu Daftar:${Regtime}\n`
         Profile += `📌 Premium: ${prem}\n`
         Profile += `📍 Nama: ${userData.name}\n`
         Profile += `💋 Umur: ${userData.umur}\n`
         Profile += `📎 Seri: ${userData.seri}\n`
         Profile += `🔖 Limit: ${limitUser}\n`
         Profile += `💰 Uang: ${userData.uang}\n`
         Profile += `🛍 Kupon: ${userData.kupon}\n`
         conn.adReply(m.chat, Profile, picture, m, {
            showAds: true
         });
      }
   }
};