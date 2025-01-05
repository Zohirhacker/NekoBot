exports.default = {
   names: ['Main Menu'],
   tags: ['owner'],
   command: ['owner', 'pemilik', 'creator'],
   start: async (m) => {
      let owner = `Nih Ka Nomor Owner Ku \nwa.me/${setting.contact} \nSilahkan Chat `
      m.reply(owner)
   }
};