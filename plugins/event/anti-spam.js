const chalk = require('chalk');
const Spam = require('../../lib/system.js');
const moment = require("moment-timezone");
module.exports = {
   start: async (m, {
      conn,
      args,
      prefix,
      command,
      groupName
   }) => {
      const antispam = db.settings.antispam
      const color = (text, color) => {
         return !color ? chalk.green(text) : chalk.keyword(color)(text)
      };      
      const orang_spam = []
      Spam.ResetSpam(orang_spam);
      const spam_private = () => {
         console.log(color('[SPAM]', 'red'), color(moment(m.exp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName));
         Spam.addSpam(m.sender, orang_spam)
         m.reply('Kamu terdeteksi spam bot tanpa jeda, lakukan perintah setelah 3 detik')
      };
      const spam_group = () => {
         console.log(color('[SPAM]', 'red'), color(moment(m.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName), 'in', color(groupName));
         Spam.addSpam(m.sender, orang_spam)
         m.reply('Kamu terdeteksi spam bot tanpa jeda, lakukan perintah setelah 3 detik')
      };
      if (antispam && command && Spam.isFiltered(m.sender) && !m.isGroup && !m.isBaileys && !(prefix === undefined || prefix === '')) {
         return spam_private();
      } else if (antispam && command && Spam.isFiltered(m.sender) && m.isGroup && !m.isBaileys && !(prefix === undefined || prefix === '')) {
         return spam_group();
      };      
      if (antispam && command && args.length < 1 && !m.isBaileys) {
         Spam.addFilter(m.sender);
      };
   }
}