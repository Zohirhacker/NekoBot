exports.default = {
   names: ['Main Menu'],
   tags: ['menu'],
   command: ['menu', 'help', 'allmenu', 'command', 'm', 'all', 'meni'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      Format
   }) => {
      const sosmed = setting.sosmed.toLowerCase().replace('https://', '')
      const garis = ' *──────────────────*'
      const side = '*┆*'
      const { Upload, Download } = await Format.statistic();
      const title = `${setting.botName}\n${setting.footer}`;
      const music = setting.music
      const lolim = logo_limit || 'Ⓛ';
      const loprem = logo_premium || 'Ⓟ';
      const select = 'SELECT HERE';
      const header_sub = `LIST MENU`;
      const header = `┌───`;
      const middle = `│`;
      const pointer = `⭓`;
      const bottom = `└──────────⭓\n`
      const left = `『`;
      const right = `』`;
      const bigHeader = false;
      const type = db.settings.menu_type; //to change example type .setmenu 1 or .setmenu 2 or .setmenu 3 untuk ganti type menu ketik .setmenu 1 2 atau 3
      const top = { left, right, bigHeader, text, header_sub, select, type };
      let info = `┏${garis}\n${side} ${star} Menu ${setting.botName}\n${side} Simple WhatsApp Bot \n${side} By ${setting.footer}\n${side}${garis}\n`;
      info += `${side} 👋  ${waktu.suasana.charAt(0).toUpperCase() + waktu.suasana.slice(1)} Bastard\n${side} @${m.sender.split('@')[0]} 💖\n`;
      info += `${side} Total Command Usage‎\n${side} Your Bot: ${db.users[m.sender].hitCmd} Time\n${side}${garis}\n`;
      info += `${side} IG: ${sosmed}\n${side}${garis}\n`;
      info += `${side} Network Bot Usage :\n${side} 📥 Download: ${Download}\n${side} 📤 Upload: ${Upload}\n${side}${garis}\n`;
      info += `${side} ${lolim} = Limit \n${side} ${loprem} = Premium\n*└*${garis}`;
      if (type === 1) {
         m.react('🥹');
         const all_menu = await Format.Menu(header, middle, pointer, bottom, prefix, top);
         conn.adReply(m.chat, `${info}\n\n${all_menu}`, cover, m, {
            showAds: true
         });
      } else if (type === 2) {
         m.react('🥺');
         const sub_menu = await Format.Menu(header, middle, pointer, bottom, prefix, top);
         conn.adReply(m.chat, `${info}\n\n${sub_menu}`, cover, m, {
            showAds: true
         });
      } else if (type === 3) {
         // list message udah g bisa lagi :(
         m.react('🥶');
         const opts = [{
            title: 'Owner',
            id: '.owner'
         }, {
            title: 'Sewa',            
            id: '.sewa'
         }, {
            title: 'Source Code',
            id: '.sc'
         }]
         const { menu, message } = await Format.Menu(header, middle, pointer, bottom, prefix, top, opts);
         if (!text) {           
            conn.sendList(m.chat, info, message, m, {
               isMedia: true,
               media: {
                  image: {
                     url: cover
                  }
               }
            });
         } else if (text || text.toLowerCase() === 'all') {
            conn.adReply(m.chat, `${info}\n\n${menu}`, cover, m);
         }
      }
   }
}