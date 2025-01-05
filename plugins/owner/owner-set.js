exports.default = {
   names: ['Setting Owner'],
   tags: ['set', 'setnamebot', 'setbotname', 'setnameowner', 'setmenu', 'setprefix', 'setnameown', 'setfooter', 'setwm', 'setsosmed', 'setmusic', 'setram', 'ram', 'setlink', 'setgroupmode', 'setgcmode', 'setrespononlygroup', 'setrespononlygc', 'setadreply', 'settyping_gc', 'settyping_group', 'settyping_pc', 'settyping_private', 'setrecording_gc', 'setrecording_group', 'setrecording_pc', 'setrecording_private', 'setread_gc', 'setread_group', 'setread_pc', 'setread_private'],
   command: ['set', 'setnamebot', 'setbotname', 'setnameowner', 'setmenu', 'setprefix', 'setnameown', 'setfooter', 'setwm', 'setsosmed', 'setmusic', 'setram', 'ram', 'setlink', 'setgroupmode', 'setgcmode', 'setrespononlygroup', 'setrespononlygc', 'setadreply', 'settyping_gc', 'settyping_group', 'settyping_pc', 'settyping_private', 'setrecording_gc', 'setrecording_group', 'setrecording_pc', 'setrecording_private', 'setread_gc', 'setread_group', 'setread_pc', 'setread_private'],
   start: async (m, {
      text,
      prefix,
      command,
      Format
   }) => {      
      if (command == 'set') {
         var caption = zw + ' *SETTING OWNER* \n*Perintah tersedia untuk mengatur setting bot berikut ini*\n\n'
         caption += '1 .setnamebot atau .setbotname \nUntuk mengganti nama bot \n\n'
         caption += '2 .setnameowner atau .setnameown \nUntuk mengganti nama owner \n\n'
         caption += '3 .setmenu\nUntuk Mengganti Gaya Menu \n\n'
         caption += '4 .setprefix\nUntuk Mengganti Type Penggunaan Prefix\n\n' 
         caption += '5 .setfooter atau .setwm \nUntuk mengganti watermark atau footer \n\n'
         caption += '6 .setsosmed \nUntuk mengganti link sosmed \n\n'
         caption += '7 .setmusic \nUntuk mengganti link music \n\n'
         caption += '8 .setram atau .ram \nUntuk mengganti nilai ram \n\n' 
         caption += '9 .setthumb atau setthumbnail atau .sthumb \nUntuk mengganti thumbnail utama bot \n\n'
         caption += '10 .setlink \nUntuk mengganti setting link group\n\n'
         caption += '11 .setgroupmode atau .setgcmode\nUntuk mengganti akses bot ke mode group atau keduanya private and group\n\n'
         caption += '12 .setrespononlygroup atau .setrespononlygc\nUntuk mematikan dan mengaktifkan respon message groupOnly\n\n'
         caption += '13 .setadreply\nUntuk mengaktifkan mode pesan dengan thumbnail atau photo\n\n'
         caption += '14 .settyping_gc atau settyping_group\nUntuk mematikan dan mengaktifkan typing atau mengetik di group\n\n'
         caption += '15 .settyping_pc atau settyping_private\nUntuk mematikan dan mengaktifkan typing atau mengetik di private chat\n\n'
         caption += '16 .setrecording_gc atau setrecording_group\nUntuk mematikan dan mengaktifkan recording atau merekam di group\n\n'
         caption += '17 .setrecording_pc atau setrecording_private\nUntuk mematikan dan mengaktifkan recording atau merekam di private chat\n\n'
         caption += '18 .setread_gc atau setread_group\nUntuk mematikan dan mengaktifkan read atau membaca chat di group\n\n'
         caption += '19 .setread_pc atau setread_private\nUntuk mematikan dan mengaktifkan read atau membaca chat di private chat\n'
         return m.reply(caption);
      } else if (/setnamebot|setbotname/.test(command)) {
         if (!text) return m.reply(`Masukan Nama Bot nya! \nContoh\n${prefix+command} Maleficent-bot`);         
         setting.botName = text
         save_setting();
         await m.reply(`Sukses mengganti nama bot menjadi ${text}\nRestarting...`);
         reset();    
      } else if (/setnameowner|setnameown/.test(command)) {
         if (!text) return m.reply(`Masukan Nama Nya! \nContoh\n${prefix+command} Ruly Henderson`);
         setting.ownerName = text
         save_setting();
         await m.reply(`Sukses Mengganti Nama Owner Bot Menjadi ${text}\n`);         
      } else if (/setfooter|setwm/.test(command)) {
         if (!text) return m.reply(`Masukan nama footer atau watermark nya! \nContoh\n${prefix+command} © Ruhend`);
         setting.footer = text
         save_setting();
         await m.reply(`Sukses Mengganti Footer atau Watermark Bot Menjadi ${text}\nRestarting...`);
         reset()
      } else if (/setsosmed/.test(command)) {
         if (!text) return m.reply(`Masukan link sosmed nya! \nContoh\n${prefix+command} www.instagram.com/ru_hend_`);
         setting.sosmed = text
         save_setting();
         await m.reply(`Sukses Mengganti Link Sosmed Menjadi ${text}\n`);
      } else if (/setmusic/.test(command)) {
         if (!text) return m.reply(`Masukan link musicnya nya! \nContoh\n${prefix+command} https://MyMusic.mp3 \natau upload music menjadi url`);
         setting.music = text
         save_setting();
         await m.reply(`Sukses Mengganti Link Music Menjadi ${text}\n`);         
      } else if (/setram|ram/.test(command)) {
         /**
         nilai ram ini penting untuk mencegah terjadinya overload 
         jika panel atau vps kamu misalnya ram nya hanya 500MB atur ke 450 atau jika 1 GB kamu atur ke 850 dan seterusnya tergantung ram panel atau server kamu
         supaya ada space tersisa , jika overload agar tidak membebankan server vps atau panel kamu
         **/
         if (!text) return m.reply(`Masukan nilai ram nya! \nContoh\n${prefix+command} 800`);
         setting.ram = parseInt(text);
         save_setting();
         await m.reply(`Sukses Mengganti Nilai RAM Menjadi ${text}\nRestarting...`);  
         reset()
      } else if (/setlink/.test(command)) {
         if (!text) return m.reply(`Masukan link group nya! \nContoh\n${prefix+command} ${global.link_group}\nAtau link lain juga bisa`);         
         const link = global.link_group
         save.global(`global.link_group = '${link}'`, `global.link_group = '${text}'`);
         await m.reply(`Sukses Mengganti Link Setting Menjadi ${text}`);
      } else if (/settyping_gc|settyping_group/.test(command)) {
         if (!text) return m.reply(`masukan parameternya contoh \n${prefix+command} on atau off`);
         if (text.toLowerCase() == 'on') {
            save.global('global.typing_group = false', 'global.typing_group = true');        
            m.reply(`Typing Group / Mengetik Di Group Berhasil Di Aktifkan`);         
         } else if (text.toLowerCase() == 'off') {
            save.global('global.typing_group = true', 'global.typing_group = false');        
            m.reply(`Typing Group / Mengetik Di Group Berhasil Di Matikan`);            
         } else {
            return m.reply(`Masukan parameter yang valid on/off \nContoh\n${prefix+command} on\nAtau\n${prefix+command} off`);                
         }         
      } else if (/settyping_pc|settyping_private/.test(command)) {
         if (!text) return m.reply(`masukan parameternya contoh \n${prefix+command} on atau off`);
         if (text.toLowerCase() == 'on') {
            save.global('global.typing_private = false', 'global.typing_private = true');        
            m.reply(`Typing Private / Mengetik Di Private Chat Berhasil Di Aktifkan`);         
         } else if (text.toLowerCase() == 'off') {
            save.global('global.typing_private = true', 'global.typing_private = false');        
            m.reply(`Typing Private / Mengetik Di Private Chat Berhasil Di Matikan`);            
         } else {
            return m.reply(`Masukan parameter yang valid on/off \nContoh\n${prefix+command} on\nAtau\n${prefix+command} off`);                
         }         
      } else if (/setrecording_gc|setrecording_group/.test(command)) {
         if (!text) return m.reply(`masukan parameternya contoh \n${prefix+command} on atau off`);
         if (text.toLowerCase() == 'on') {
            save.global('global.recording_group = false', 'global.recording_group = true');        
            m.reply(`Recording Group / Merekam Di Group Berhasil Di Aktifkan`);         
         } else if (text.toLowerCase() == 'off') {
            save.global('global.recording_group = true', 'global.recording_group = false');        
            m.reply(`Recording Group / Merekam Di Group Berhasil Di Matikan`);            
         } else {
            return m.reply(`Masukan parameter yang valid on/off \nContoh\n${prefix+command} on\nAtau\n${prefix+command} off`);                
         }         
      } else if (/setrecording_pc|setrecording_private/.test(command)) {
         if (!text) return m.reply(`masukan parameternya contoh \n${prefix+command} on atau off`);
         if (text.toLowerCase() == 'on') {
            save.global('global.recording_private = false', 'global.recording_private = true');        
            m.reply(`Recording Private / Merekam Di Private Chat Berhasil Di Aktifkan`);         
         } else if (text.toLowerCase() == 'off') {
            save.global('global.recording_private = true', 'global.recording_private = false');        
            m.reply(`Recording Private / Merekam Di Private Chat Berhasil Di Matikan`);            
         } else {
            return m.reply(`Masukan parameter yang valid on/off \nContoh\n${prefix+command} on\nAtau\n${prefix+command} off`);                
         }         
      } else if (/setread_gc|setread_group/.test(command)) {         
         if (!text) return m.reply(`masukan parameternya contoh \n${prefix+command} on atau off`);
         if (text.toLowerCase() == 'on') {
            save.global('global.read_group = false', 'global.read_group = true');
            m.reply(`Read Group / Membaca Di Group Berhasil Di Aktifkan`);          
         } else if (text.toLowerCase() == 'off') {
            save.global('global.read_group = true', 'global.read_group = false');
            m.reply(`Read Group / Membaca Di Group Berhasil Di Matikan`); 
         } else {
            return m.reply(`Masukan parameter yang valid on/off \nContoh\n${prefix+command} on\nAtau\n${prefix+command} off`);                
         } 
      } else if (/setread_pc|setread_private/.test(command)) {         
         if (!text) return m.reply(`masukan parameternya contoh \n${prefix+command} on atau off`);
         if (text.toLowerCase() == 'on') {
            save.global('global.read_private = false', 'global.read_private = true');
            m.reply(`Read Private / Membaca Di Private Chat Berhasil Di Aktifkan`);          
         } else if (text.toLowerCase() == 'off') {
            save.global('global.read_private = true', 'global.read_private = false');
            m.reply(`Read Private / Membaca Di Private Chat Berhasil Di Matikan`); 
         } else {
            return m.reply(`Masukan parameter yang valid on/off \nContoh\n${prefix+command} on\nAtau\n${prefix+command} off`);                
         } 
      } else if (/setgroupmode|setgcmode/.test(command)) {         
         if (!text) return m.reply(`masukan parameternya contoh \n${prefix+command} on atau off`);
         if (text.toLowerCase() == 'on') {
            save.global('global.group_mode = false', 'global.group_mode = true');
            m.reply(`Sukses Mengubah Ke Group Mode \nPrivate Chat Tidak Bisa Di Akses Kecuali Aku , Owner Dan Premium\n`);            
         } else if (text.toLowerCase() == 'off') {
            save.global('global.group_mode = true', 'global.group_mode = false');
            m.reply(`Sukses Mematikan Group Mode Sekarang Private Chat Dapat Diakses\n`);            
         } else {
            return m.reply(`Masukan parameter yang valid on/off \nContoh\n${prefix+command} on\nAtau\n${prefix+command} off`);                
         } 
      } else if (/setadreply/.test(command)) {         
         if (!text) return m.reply(`masukan parameternya contoh \n${prefix+command} on atau off`);
         if (text.toLowerCase() == 'on') {
            save.global('global.adReply = false', 'global.adReply = true');
            m.reply(`adReply Berhasil Di Aktifkan`);
         } else if (text.toLowerCase() == 'off') {
            save.global('global.adReply = true', 'global.adReply = false');
            m.reply(`adReply Berhasil Di Matifkan`);
         } else {
            return m.reply(`Masukan parameter yang valid on/off \nContoh\n${prefix+command} on\nAtau\n${prefix+command} off`);                
         } 
      } else if (/setrespononlygroup|setrespononlygc/.test(command)) {         
         if (!text) return m.reply(`masukan parameternya contoh \n${prefix+command} on atau off`);
         if (text.toLowerCase() == 'on') {
            save.global('global.group_only_message = false', 'global.group_only_message = true');            
            m.reply(`Sukses Mengaktifkan Respon ${mess.groupOnly} Pada Chat Pribadi\nJika Mode Group Aktif Dan Jika Ada Pesan Datang Di Pribadi Chat, Kecuali Aku, Owner, Dan Premium Maka Akan Merespon ${mess.groupOnly}\n`);            
         } else if (text.toLowerCase() == 'off') {
            save.global('global.group_only_message = true', 'global.group_only_message = false');            
            m.reply(`Sukses Mematikan Respon Pesan ${mess.groupOnly} Pada Chat Pribadi\nJika Mode Group Aktif Dan Jika Ada Pesan Datang Di Pribadi Chat, Kecuali Aku, Owner, Dan Premium Maka Sama Sekali Tidak Akan Merespon Apapun\n`);            
         } else {
            return m.reply(`Masukan parameter yang valid on/off \nContoh\n${prefix+command} on\nAtau\n${prefix+command} off`);                
         }
      } else if (/setmenu/.test(command)) {         
         if (!text) return m.reply(`masukan parameternya contoh \n${prefix+command} 1`);
         const available = ['1', '2', '3']
         if (available.includes(text)) {
            db.settings.menu_type = parseInt(text);
            m.reply(`Sukses Ganti Menu Type Ke ${text}`);
         } else {
            return m.reply(`Opsi Menu Type ${text} Tidak Tersedia`);
         }
      } else if (/setprefix/.test(command)) {         
         if (!text) return m.reply(`masukan parameternya contoh \n${prefix+command} multi`);         
         if (text === 'single') {
            db.settings.prefix = 'single'
            m.reply(`Sukses Ganti Prefix Type Ke single`);
         } else if (text === 'multi') {
            db.settings.prefix = 'multi'
            m.reply(`Sukses Ganti Prefix Type Ke multi`);     
         } else {
            return m.reply(`Opsi Prefix Type ${text} Tidak Tersedia\nYang Tersedia single dan multi`);
         }
      }
   },
   owner: true
};