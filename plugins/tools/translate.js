const translate = require('../../lib/src/translate/translate.js');
exports.default = {
   names: ['Tools'],
   tags: ['translate'],
   command: ['translate', 'tr'],
   start: async (m, {
      conn,
      args,
      prefix,
      text,
      command
   }) => {
      if (!text) return m.reply('ex : tr ar hello ironkid')
      var lang, text
      if (args.length >= 2) {
         lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
      } else if (m.quoted && m.quoted.text) {
         lang = args[0] ? args[0] : 'id', text = m.quoted.text
      } else m.reply(`ex : ${prefix + command} ar hello i am ironkid ai`)
      let res = await translate(text, {
         to: lang,
         autoCorrect: true
      }).catch(_ => null)
      if (!res) return m.reply(`Error : Language "${lang}" Not Supported`)
      var Translate = ` ${res.text}`.trim()
      conn.adReply(m.chat, Translate, cover, m);
   },
   limit: 2
};