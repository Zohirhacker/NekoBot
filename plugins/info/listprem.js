
exports.default = {
   names: ['Info'],
   tags: ['listprem'],
   command: ['listprem'],
   start: async (m, {
      conn
   }) => {
      let users = Object.entries(db.users).filter(user => user[1].premiumTime);
      let premiumUsers = users.map(([jid, user]) => {
         return {
            jid: jid,
            reason: user.premiumTime || ''
         };
      });
      let premiumList = premiumUsers.map(user => `${user.jid.split('@')[0]}\nPremium Until: ${user.reason}`).join('\n');
      let text = `Here is a list of premium users ${setting.botName}\n`;
      text += `Total : ${premiumUsers.length}\n`;
      text += `User: ${premiumList ? '\n' + premiumList : ''}`;
      conn.adReply(m.chat, text, cover, m);
   }
};