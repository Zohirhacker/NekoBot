exports.default = {
   names: ['Owner'],
   tags: ['broadcast'],
   command: ['broadcast', 'bc'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      Format
   }) => {
      if (!text) return m.reply(`Masukan Text Nya Contoh:\n${prefix+command} Informasi ${setting.botName}`);
      let group = Object.keys(db.chats);
      m.reply(`Ok tunggu sedang broadcast ke group`);
      for (let jid of group) {
         if (!jid) continue
         await Format.sleep(3000);
         //atur ajh sndri disini model pesan nya mau kek mana
         conn.sendMessage(jid, { text: text });
      }
   },
   owner: true
}